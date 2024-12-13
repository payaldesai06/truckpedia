(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/object/entries */ "./node_modules/@babel/runtime/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/core-js/object/values */ "./node_modules/@babel/runtime/core-js/object/values.js");
/* harmony import */ var _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/core-js/map */ "./node_modules/@babel/runtime/core-js/map.js");
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Columns_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Columns.vue */ "./resources/js/src/components/spreadsheet/components/Columns.vue");
/* harmony import */ var _components_ExpandColumn_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ExpandColumn.vue */ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue");
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Header.vue */ "./resources/js/src/components/spreadsheet/components/Header.vue");
/* harmony import */ var _components_SpreadsheetFilters_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/SpreadsheetFilters.vue */ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _views_pages_dispatch_load_EditLoad_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../views/pages/dispatch/load/EditLoad.vue */ "./resources/js/src/views/pages/dispatch/load/EditLoad.vue");
/* harmony import */ var _views_pages_dispatch_load_LoadSidebar_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../views/pages/dispatch/load/LoadSidebar.vue */ "./resources/js/src/views/pages/dispatch/load/LoadSidebar.vue");
/* harmony import */ var _assets_images_spreadsheet_short_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../assets/images/spreadsheet/short.svg */ "./resources/assets/images/spreadsheet/short.svg");
/* harmony import */ var _assets_images_spreadsheet_short_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_images_spreadsheet_short_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_images_spreadsheet_medium_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../assets/images/spreadsheet/medium.svg */ "./resources/assets/images/spreadsheet/medium.svg");
/* harmony import */ var _assets_images_spreadsheet_medium_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_images_spreadsheet_medium_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_images_spreadsheet_tall_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../assets/images/spreadsheet/tall.svg */ "./resources/assets/images/spreadsheet/tall.svg");
/* harmony import */ var _assets_images_spreadsheet_tall_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_images_spreadsheet_tall_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_images_spreadsheet_row_height_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../assets/images/spreadsheet/row-height.svg */ "./resources/assets/images/spreadsheet/row-height.svg");
/* harmony import */ var _assets_images_spreadsheet_row_height_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_images_spreadsheet_row_height_svg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_ColorPicker_vue__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ColorPicker.vue */ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _components_SpreadsheetSort_vue__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/SpreadsheetSort.vue */ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");












var _methods;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a) { var sourceSymbolKeys = _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SpreadsheetHeader: _components_Header_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    ExpandColumn: _components_ExpandColumn_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Columns: _components_Columns_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    SpreadsheetFilters: _components_SpreadsheetFilters_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    EditLoad: _views_pages_dispatch_load_EditLoad_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    LoadSidebar: _views_pages_dispatch_load_LoadSidebar_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    ColorPicker: _components_ColorPicker_vue__WEBPACK_IMPORTED_MODULE_24__["default"],
    SpreadsheetSort: _components_SpreadsheetSort_vue__WEBPACK_IMPORTED_MODULE_26__["default"],
    ChevronDownIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_28__["ChevronDownIcon"],
    FindCarriersPanel: function FindCarriersPanel() {
      return __webpack_require__.e(/*! import() */ 142).then(__webpack_require__.bind(null, /*! ./components/FindCarriersPanel.vue */ "./resources/js/src/components/spreadsheet/components/FindCarriersPanel.vue"));
    },
    MassInvoicePopup: function MassInvoicePopup() {
      return __webpack_require__.e(/*! import() */ 202).then(__webpack_require__.bind(null, /*! ./components/MassInvoicePopup.vue */ "./resources/js/src/components/spreadsheet/components/MassInvoicePopup.vue"));
    }
  },
  data: function data() {
    return {
      refreshTrigger: 0,
      tableData: null,
      expandColumnPopup: false,
      columnField: [],
      modifySubsheetName: false,
      subsheetNameModel: '',
      subsheetName: '',
      isSidebarActiveLocal: false,
      loadId: {},
      loadTimeout: null,
      columnResizebleId: null,
      columnResizebleSheetId: null,
      columnResizebleSpreadsheetId: null,
      rowHeight: 'short',
      rowHeightShortIcon: _assets_images_spreadsheet_short_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
      rowHeightMediumIcon: _assets_images_spreadsheet_medium_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
      rowHeightTallIcon: _assets_images_spreadsheet_tall_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
      rowHeightIcon: _assets_images_spreadsheet_row_height_svg__WEBPACK_IMPORTED_MODULE_22___default.a,
      selectedRows: [],
      selectedColumn: null,
      tableFormatMapping: null,
      rowsFormatted: [],
      updatingCellFormat: false,
      customColumnCellTimerMap: new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_10___default.a(),
      dispatcherNoteTimerMap: new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_10___default.a(),
      paymentRequestPrompt: {
        isActive: false,
        selectedLoad: null
      },
      promptMessage: '',
      promptColor: '',
      emailSubject: '',
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false
      },
      itemToUpdate: {},
      sortSchema: null,
      columnSortOptions: [{
        text: 'A → Z',
        value: 'a'
      }, {
        text: 'Z → A',
        value: 'd'
      }],
      numberTypeColumns: ['loadAmount', 'loadDriverPay', 'loadDistance', 'loadTotalWeight', 'loadHaulingFee', 'loadFuelSurcharge', 'loadAccessorialFees', 'loadAccessorialDeductions', 'loadThirdPartyCarrierHaulingFee', 'loadThirdPartyCarrierFuelSurcharge', 'loadThirdPartyCarrierAccessorialFees', 'loadThirdPartyCarrierAccessorialDeductions'],
      hosKnobStrokeWidth: 5,
      nonSortableColumns: ['loadDriverHos'],
      availableTrucks: [],
      additionalCurrencyTypeFields: ['loadHaulingFee', 'loadFuelSurcharge', 'loadAccessorialFees', 'loadAccessorialDeductions', 'loadThirdPartyCarrierHaulingFee', 'loadThirdPartyCarrierFuelSurcharge', 'loadThirdPartyCarrierAccessorialFees', 'loadThirdPartyCarrierAccessorialDeductions'],
      paymentReceivedPrompt: {
        isActive: false,
        selectedLoad: null
      },
      receivedAmount: '',
      isMassInvoicePopupActive: false
    };
  },
  props: {
    spreadsheetId: {
      type: Number,
      required: true
    },
    value: {
      type: Array || Object,
      default: function _default() {
        return [];
      }
    },
    headers: {
      required: true,
      type: Array
    },
    subsheet: {
      type: Object
    },
    accessLevel: {
      required: false
    },
    viewMode: {
      type: String,
      default: 'tab'
    }
  },
  created: function created() {
    var _this = this;

    this.subsheetName = this.subsheet.name;
    this.setSortSchema((this.subsheet || {}).sortSchema || null);
    jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').click(function (event) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_11___default()(event.target).closest('.subsheet-rename-input').length) {
        _this.onModifySubsheetNameCancel();
      }
    });
    this.generateTableFormattingMaps();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_16__["mapGetters"])('auth', ['userRole', 'user']), Object(vuex__WEBPACK_IMPORTED_MODULE_16__["mapGetters"])('factoring-company', ['allFactoringCompanies']), {
    isViewer: function isViewer() {
      return this.accessLevel && this.accessLevel === 4;
    },
    table: function table() {
      var _this2 = this;

      var rowsData = _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default()(this.tableData);

      var fromattedRowData = rowsData.map(function (record) {
        var newDataFormat = {};
        var keysToExclude = ['key_id', 'selected', 'refreshTrigger', 'format'];

        var _arr = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default()(record);

        for (var _i = 0; _i < _arr.length; _i++) {
          var _arr$_i = _slicedToArray(_arr[_i], 2),
              key = _arr$_i[0],
              value = _arr$_i[1];

          if (keysToExclude.includes(key)) continue;
          var row = record.key_id;
          var column = key;

          var _ref = ((_this2.tableFormatMapping || {})[row] || {})[column] || {},
              s = _ref.s,
              fc = _ref.fc,
              cc = _ref.cc;

          newDataFormat[column] = {
            data: value,
            isStruck: !!s,
            textColor: fc && 0 < fc && fc <= _this2.colorPalletSrc.length ? _this2.colorPalletSrc[fc - 1] || null : null,
            cellColor: cc && 0 < cc && cc <= _this2.colorPalletSrc.length ? _this2.colorPalletSrc[cc - 1] || null : null,
            key: key,
            styleObject: {}
          };
          var keyData = newDataFormat[key];
          if (keyData.isStruck) newDataFormat[key].styleObject.textDecoration = 'line-through';
          if (keyData.textColor) newDataFormat[key].styleObject.color = keyData.textColor;
          if (keyData.cellColor) newDataFormat[key].styleObject.backgroundColor = "".concat(keyData.cellColor);
        }

        return _objectSpread({}, newDataFormat, {
          key_id: record.key_id,
          selected: _this2.selectedRows.includes(record.key_id),
          refreshTrigger: _this2.refreshTrigger,
          format: record.format
        });
      });

      if (this.sortSchema) {
        var dateBySort = '';
        var sort = this.sortSchema.map(function (ele) {
          var orderSort = {};
          if (!ele) return;

          if (ele.predefinedColumn) {
            if (ele.predefinedColumn === 'loadShipDate' || ele.predefinedColumn === 'loadDeliveryDate') {
              orderSort.date = true;
              orderSort.type = 'date';
            }
          } else {
            orderSort.date = false;
          }

          if (ele.order === 'd') {
            orderSort.order = "-".concat(ele.columnId);
            orderSort.key = "".concat(ele.columnId);
            orderSort.dir = -1;
          }

          if (ele.order === 'a') {
            orderSort.order = String(ele.columnId);
            orderSort.key = String(ele.columnId);
            orderSort.dir = 1;
          }

          if (ele.order === 'en') {
            orderSort.order = "".concat(ele.columnId);
            orderSort.key = "".concat(ele.columnId);
            orderSort.dir = 1;
            orderSort.type = 'en';
          }

          if (ele.order === 'ne') {
            orderSort.order = "-".concat(ele.columnId);
            orderSort.key = "".concat(ele.columnId);
            orderSort.dir = -1;
            orderSort.type = 'ne';
          }

          if ((ele || {}).predefinedColumn === 'loadPod') {
            orderSort.enSort = orderSort.type;
            orderSort.type = 'POD';
          }

          return orderSort;
        }); // return fromattedRowData.sort(this.fieldSorter(sort, dateBySort));

        return this.fieldSortingFunction(fromattedRowData, sort);
      }

      return fromattedRowData;
    },
    columnFieldData: function columnFieldData() {
      return this.columnField.sort(function (a, b) {
        return a.order - b.order;
      });
    },
    multilineRowHeight: function multilineRowHeight() {
      if (this.rowHeight == 'short') {
        return "height-".concat(this.rowHeight, " line-clamp line-clamp-short");
      }

      if (this.rowHeight == 'medium') {
        return "height-".concat(this.rowHeight, " line-clamp line-clamp-medium");
      }

      if (this.rowHeight == 'tall') {
        return "height-".concat(this.rowHeight, " line-clamp line-clamp-tall");
      }

      return "height-".concat(this.rowHeight);
    },
    loadStatuses: function loadStatuses() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_25__["default"].status.loadWithLabels;
    },
    fillFormatColorSelected: function fillFormatColorSelected() {
      var colorSelection = ((this.selectedColumn || {}).data || {}).cellColor;
      if (colorSelection) return colorSelection;
      return '';
      /* Doesn't work at the moment due to deep reactivity issue */
      // colorSelection = ((this.cellColorMapping || {})[0] || {})[0] || ''
      // return this.refreshTrigger ? colorSelection : ''
    },
    textFormatColorSelected: function textFormatColorSelected() {
      var colorSelection = ((this.selectedColumn || {}).data || {}).textColor || '';
      if (colorSelection) return colorSelection;
      return '';
      /* Doesn't work at the moment due to deep reactivity issue */
      // colorSelection = ((this.textColorMapping || {})[0] || {})[0] || ''
      // return this.refreshTrigger ? colorSelection : ''
    },
    colorPalletSrc: function colorPalletSrc() {
      return (_config_constants__WEBPACK_IMPORTED_MODULE_25__["default"] || {}).spreadSheetColorPickerPallet || [];
    },
    hasDefaultGLAccess: function hasDefaultGLAccess() {
      var _ref2 = (this.user || {}).admin_company_details || {},
          admin_company_detail_id = _ref2.admin_company_detail_id;

      if (admin_company_detail_id) {
        return _config_constants__WEBPACK_IMPORTED_MODULE_25__["default"].companiesWithPayToCodeNDefaultGLAccountAccess.includes(Number(admin_company_detail_id));
      }

      return false;
    },
    iconHeight: function iconHeight() {
      var height = {
        short: 35,
        medium: 35,
        tall: 50
      };
      return height[this.rowHeight] || 39;
    },
    isHosLabelVisible: function isHosLabelVisible() {
      return this.rowHeight === 'tall';
    },
    sortHeaders: function sortHeaders() {
      var _this3 = this;

      return (this.headers || []).filter(function (header) {
        return (_this3.nonSortableColumns || []).indexOf(header.predefinedColumn) === -1;
      });
    },
    knobStyleObject: function knobStyleObject() {
      return {
        height: "".concat(this.iconHeight, "px")
      };
    },
    isBatchActionsVisible: function isBatchActionsVisible() {
      var hasAccess = false;

      var _ref3 = (this.user || {}).admin_company_details || {},
          admin_company_detail_id = _ref3.admin_company_detail_id;

      if (admin_company_detail_id) {
        hasAccess = _config_constants__WEBPACK_IMPORTED_MODULE_25__["default"].companiesWithSpreadsheetBatchActionsAccess.includes(Number(admin_company_detail_id));
      }

      return hasAccess && this.selectedRows.length > 1;
    }
  }),
  watch: {
    // Call update api after destory expand popup
    isSidebarActiveLocal: {
      handler: function handler() {
        var _this4 = this;

        if (!this.isSidebarActiveLocal) {
          this.loadTimeout = setTimeout(function () {
            _this4.updateSpreadsheet(_this4.subsheet.id);
          }, 10);
        }
      }
    },
    value: {
      handler: function handler(newVal) {
        this.tableData = this.generateTableData(newVal);
        this.reRenderTable();
      },
      deep: true,
      immediate: true
    },
    tableData: {
      handler: function handler(newVal) {
        var _this5 = this;

        var reGenerateValueArray = function reGenerateValueArray(newData) {
          return _this5.value.map(function (currentRow) {
            return newData[currentRow.key_id];
          });
        };

        this.$emit('updateValue', reGenerateValueArray(newVal));
      },
      deep: true
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.loadTimeout);
  },
  mounted: function mounted() {
    this.rowHeight = this.subsheet.rowHeight;
    this.resizeColumWidth();
  },
  methods: (_methods = {
    onConfirmMultipleSpreadsSheetDeleted: function onConfirmMultipleSpreadsSheetDeleted() {
      var _this6 = this;

      var options = {
        title: 'Confirm Delete',
        color: 'danger',
        text: 'Are you sure you want to delete these loads?',
        accept: function accept() {
          return _this6.deleteSelectedSpreadSheetLoads();
        }
      };
      this.onConfirm(options);
    },
    // Confirm Dialog
    onConfirm: function onConfirm(options) {
      this.$vs.dialog(_objectSpread({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Yes'
      }, options));
    },
    onConfirmCancel: function onConfirmCancel(loadId) {
      var _this7 = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        acceptText: 'Yes, I confirm',
        title: 'Cancel Load',
        text: 'Are you sure you want to cancel this load?',
        accept: function accept() {
          return _this7.cancelLoad(loadId);
        }
      });
    },
    cancelLoad: function () {
      var _cancelLoad = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(loadId) {
        var param;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$vs.loading();
                _context.prev = 1;
                param = {
                  load_id: loadId
                };
                _context.next = 5;
                return this.$store.dispatch('load/cancelLoad', param);

              case 5:
                this.$vs.loading.close();
                this.itemToUpdate.data = 'Canceled';
                this.$vs.notify({
                  color: 'success',
                  title: 'Success',
                  text: 'Load canceled successfully.'
                });
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                this.$vs.loading.close();
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: (((_context.t0 || {}).response || {}).data || {}).message || 'Something went wrong!'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      return function cancelLoad(_x) {
        return _cancelLoad.apply(this, arguments);
      };
    }(),
    resetInvoicePrompt: function resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false
      };
    },
    // on Load status change
    onLoadStatusChange: function () {
      var _onLoadStatusChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2($event, data, item) {
        var loadId, statusItem;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                loadId = data.key_id;
                this.itemToUpdate = item;
                statusItem = $event; // if load is changed

                if (!($event && statusItem.label !== item.data)) {
                  _context2.next = 28;
                  break;
                }

                _context2.prev = 4;
                _context2.t0 = statusItem.value;
                _context2.next = _context2.t0 === 'canceled' ? 8 : _context2.t0 === 'invoice_created' ? 10 : _context2.t0 === 'payment_requested' ? 12 : _context2.t0 === 'invoice_paid' ? 15 : 18;
                break;

              case 8:
                this.onConfirmCancel(loadId);
                return _context2.abrupt("break", 23);

              case 10:
                this.showInvoicePrompt(loadId);
                return _context2.abrupt("break", 23);

              case 12:
                _context2.next = 14;
                return this.onConfirmRequestForPayment(loadId, item.data);

              case 14:
                return _context2.abrupt("break", 23);

              case 15:
                _context2.next = 17;
                return this.onConfirmPaymentReceived(loadId, item.data);

              case 17:
                return _context2.abrupt("break", 23);

              case 18:
                _context2.next = 20;
                return this.changeStatus(statusItem.value, loadId);

              case 20:
                this.$vs.notify({
                  time: 3000,
                  color: 'success',
                  title: 'Status Updated',
                  text: 'Load Status Updated successfully.'
                });
                item.data = statusItem.label;
                return _context2.abrupt("break", 23);

              case 23:
                _context2.next = 28;
                break;

              case 25:
                _context2.prev = 25;
                _context2.t1 = _context2["catch"](4);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 8000,
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_27__["getApiErrorMsg"])(_context2.t1)
                });

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 25]]);
      }));

      return function onLoadStatusChange(_x2, _x3, _x4) {
        return _onLoadStatusChange.apply(this, arguments);
      };
    }(),
    changeStatus: function () {
      var _changeStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(status, loadId) {
        var param;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                param = {
                  load_id: loadId,
                  status: status
                };
                _context3.next = 3;
                return this.updateLoadStatus(param);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function changeStatus(_x5, _x6) {
        return _changeStatus.apply(this, arguments);
      };
    }(),
    // get load for payment api call
    getLoad: function () {
      var _getLoad = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(loadId) {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = {
                  fields: ['customer:billingEmail,noFactoring', 'totalAmount', 'reference', 'paymentOption', 'invoice:storageFilename']
                };
                _context4.next = 3;
                return this.$store.dispatch('load/getOneLoad', {
                  loadId: loadId,
                  params: params
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getLoad(_x7) {
        return _getLoad.apply(this, arguments);
      };
    }(),
    updateLoadStatus: function () {
      var _updateLoadStatus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5(param) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$store.dispatch('pipeline/updateStatus', param);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function updateLoadStatus(_x8) {
        return _updateLoadStatus.apply(this, arguments);
      };
    }(),
    showInvoicePrompt: function () {
      var _showInvoicePrompt = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6(loadId) {
        var _ref4, load;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getLoad(loadId);

              case 2:
                _ref4 = _context6.sent;
                load = _ref4.payload;
                this.invoicePrompt = {
                  isActive: true,
                  selectedLoad: loadId,
                  noFactoring: load && load.customer && load.customer.noFactoring
                };

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function showInvoicePrompt(_x9) {
        return _showInvoicePrompt.apply(this, arguments);
      };
    }(),
    generateInvoice: function () {
      var _generateInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee7(load) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: load
                };

                if (this.invoicePrompt.skipFactoring) {
                  payload.skipFactoring = this.invoicePrompt.skipFactoring;
                } else {
                  payload.skipFactoring = false;
                }

                _context7.prev = 3;
                _context7.next = 6;
                return this.$store.dispatch('load/generateInvoice', payload);

              case 6:
                this.itemToUpdate.data = 'Invoice Generated';
                this.$vs.notify({
                  color: 'primary',
                  title: 'Invoice Generated',
                  text: 'Invoice Generated successfully.'
                });
                _context7.next = 13;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](3);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 8000,
                  text: _context7.t0.response.data.message
                });

              case 13:
                _context7.prev = 13;
                this.$vs.loading.close();
                return _context7.finish(13);

              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[3, 10, 13, 16]]);
      }));

      return function generateInvoice(_x10) {
        return _generateInvoice.apply(this, arguments);
      };
    }(),
    // Request for Payment
    onConfirmRequestForPayment: function () {
      var _onConfirmRequestForPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee8(loadId, currentStatus) {
        var _ref5, load, text, noFactoring;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return this.getLoad(loadId);

              case 3:
                _ref5 = _context8.sent;
                load = _ref5.payload;

                if (currentStatus === 'Invoice Generated' || currentStatus === 'Payment Requested') {
                  text = "Are you sure you want to send request for payment with amount ".concat(load.totalAmount, " USD");
                  this.promptColor = 'warning';
                  noFactoring = load && load.customer && load.customer.noFactoring;

                  if (!noFactoring && load.paymentOption != 'skipFactoring' && this.allFactoringCompanies && this.allFactoringCompanies.length > 0) {
                    this.promptMessage = text + " to ".concat(this.allFactoringCompanies[0].billing_email, "?");
                  } else {
                    if (load && load.customer && load.customer.billingEmail) {
                      this.promptMessage = text + " to ".concat(load.customer.billingEmail, "?");
                    } else {
                      this.promptMessage = text + "? (Missing customer billing email)";
                      this.promptColor = 'danger';
                    }
                  }

                  this.emailSubject = "Invoice for Load ".concat(load.reference ? load.reference : '');
                  this.showPaymentRequestPrompt(load);
                } else {
                  this.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: 'Load has to be in invoice generated or payment requested status'
                  });
                }

                _context8.next = 10;
                break;

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 8]]);
      }));

      return function onConfirmRequestForPayment(_x11, _x12) {
        return _onConfirmRequestForPayment.apply(this, arguments);
      };
    }(),
    requestForPayment: function () {
      var _requestForPayment = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee9() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: this.paymentRequestPrompt.selectedLoad.id,
                  subject: this.emailSubject
                };
                _context9.prev = 2;
                _context9.next = 5;
                return this.$store.dispatch('load/requestForPayment', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Request',
                  text: 'Request for Payment sent successfully.'
                });
                this.itemToUpdate.data = 'Payment Requested';
                _context9.next = 12;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context9.t0.response.data.message
                });

              case 12:
                _context9.prev = 12;
                this.$vs.loading.close();
                return _context9.finish(12);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[2, 9, 12, 15]]);
      }));

      return function requestForPayment() {
        return _requestForPayment.apply(this, arguments);
      };
    }(),
    showPaymentRequestPrompt: function showPaymentRequestPrompt() {
      var load = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.paymentRequestPrompt = {
        isActive: true,
        selectedLoad: load
      };
    },
    resetPaymentRequestPrompt: function resetPaymentRequestPrompt() {
      this.paymentRequestPrompt = {
        isActive: false,
        selectedLoad: null
      };
    },
    // Payment Received
    onConfirmPaymentReceived: function () {
      var _onConfirmPaymentReceived = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee10(loadId, currentStatus) {
        var _ref6, load;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return this.getLoad(loadId);

              case 3:
                _ref6 = _context10.sent;
                load = _ref6.payload;

                if (['Payment Requested', 'Delivered', 'Invoice Generated'].includes(currentStatus)) {
                  this.paymentReceivedPrompt = {
                    isActive: true,
                    selectedLoad: load
                  };
                  this.receivedAmount = load.totalAmount.toString(); // convering number into string because input type number accepts string and if value is 0 then it doesn't accept 0 as a default value;
                } else {
                  this.$vs.notify({
                    color: 'danger',
                    title: 'Error',
                    text: 'Load has to be in delivered, invoice generated, or payment requested status'
                  });
                }

                _context10.next = 10;
                break;

              case 8:
                _context10.prev = 8;
                _context10.t0 = _context10["catch"](0);

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 8]]);
      }));

      return function onConfirmPaymentReceived(_x13, _x14) {
        return _onConfirmPaymentReceived.apply(this, arguments);
      };
    }(),
    paymentReceived: function () {
      var _paymentReceived = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee11() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.$vs.loading();
                payload = {
                  id: this.paymentReceivedPrompt.selectedLoad.id,
                  paidAmount: this.receivedAmount ? Number(this.receivedAmount) : null
                };
                _context11.prev = 2;
                _context11.next = 5;
                return this.$store.dispatch('load/paymentReceived', payload);

              case 5:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Payment Received',
                  text: 'Payment received successfully.'
                });
                this.itemToUpdate.data = 'Paid';
                _context11.next = 12;
                break;

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: _context11.t0.response.data.message
                });

              case 12:
                _context11.prev = 12;
                this.$vs.loading.close();
                return _context11.finish(12);

              case 15:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[2, 9, 12, 15]]);
      }));

      return function paymentReceived() {
        return _paymentReceived.apply(this, arguments);
      };
    }(),
    deleteSelectedSpreadSheetLoads: function () {
      var _deleteSelectedSpreadSheetLoads = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee12() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                payload = {
                  loadIds: this.selectedRows
                };
                _context12.next = 4;
                return this.$store.dispatch('load/batchDeleteLoads', payload);

              case 4:
                this.updateSpreadsheet(this.subsheet.id);
                this.$vs.notify({
                  color: 'success',
                  title: 'Success',
                  text: this.selectedRows.length > 1 ? 'Loads deleted successfully' : 'Load deleted successfully'
                });
                _context12.next = 11;
                break;

              case 8:
                _context12.prev = 8;
                _context12.t0 = _context12["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: (((_context12.t0 || {}).response || {}).data || {}).message || "Something went wrong"
                });

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 8]]);
      }));

      return function deleteSelectedSpreadSheetLoads() {
        return _deleteSelectedSpreadSheetLoads.apply(this, arguments);
      };
    }(),
    filterByThisField: function filterByThisField(item) {
      this.$refs.filterField.filterField(item);
    },
    fieldSortingFunction: function fieldSortingFunction(arrayToSort, sortingSchema) {
      var arrayData = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(arrayToSort));

      var isNumber = function isNumber(str) {
        return typeof str === 'number' || /^\d+$/.test(str);
      };

      var dataCompareFunction = function dataCompareFunction(elOne, elTwo, key, dir) {
        var result = elOne[key].data.localeCompare(elTwo[key].data);
        return dir * result;
        /* For the time being , just doing string comparison for sort
          and ignoring multi date concept
          Hence the commented code below.
          Keep it intact as we might use it later
          (Above statement is as requested)
        */

        /*
          // dir : 1 => ascending, -1 => descending
          let aDate, bDate;
          if (dir > 0) {
            aDate = elOne[key].data.split(';').sort((a,b) => new Date(a) - new Date(b))[0];
            bDate = elTwo[key].data.split(';').sort((a,b) => new Date(a) - new Date(b))[0];
          } else {
            aDate = elOne[key].data.split(';').sort((a,b) => new Date(b) - new Date(a))[0];
            bDate = elTwo[key].data.split(';').sort((a,b) => new Date(b) - new Date(a))[0];
          }
          if (new Date(aDate) > new Date(bDate)) return dir;
          if (new Date(aDate) < new Date(bDate)) return -dir;
          return 0;
        */
      };

      var numberCompareFunction = function numberCompareFunction(a, b, key, dir) {
        return dir > 0 ? a[key].data - b[key].data : b[key].data - a[key].data;
      };

      var stringCompareFunction = function stringCompareFunction(a, b, key, dir) {
        var result = a[key].data.localeCompare(b[key].data);
        return dir * result;
      };

      var emptyToNonEmptyCompare = function emptyToNonEmptyCompare(a, b, key, dir) {
        var res = 0;

        if (a[key].data == null && b[key].data != null) {
          res = -1;
        } else if (a[key].data != null && b[key].data == null) {
          res = 1;
        }

        return res * dir;
      };

      var numberOrStringCompare = function numberOrStringCompare(a, b, key, dir) {
        if (!a[key] || !b[key]) {
          return;
        } else if (a[key].data == null && b[key].data != null) {
          return -1 * dir;
        } else if (a[key].data != null && b[key].data == null) {
          return 1 * dir;
        } else if (a[key].data == null && b[key].data == null) {
          return 0;
        }

        if (isNumber(a[key].data) && isNumber(b[key].data)) {
          return numberCompareFunction(a, b, key, dir);
        } else {
          return stringCompareFunction(a, b, key, dir);
        }
      };

      var PODFileCompare = function PODFileCompare(a, b, key, dir, isEmptySort) {
        var aDataLength = (a[key].data || []).length;
        var bDataLength = (b[key].data || []).length;

        if (isEmptySort) {
          var res = 0;

          if (!aDataLength && bDataLength) {
            res = -1;
          } else if (aDataLength && !bDataLength) {
            res = 1;
          }

          return res * dir;
        }

        return dir > 0 ? aDataLength - bDataLength : bDataLength - aDataLength;
      };

      var arrayCompareFunction = function arrayCompareFunction(a, b) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var sortDate = sortingSchema[i];
        var key = sortDate.key;
        var dir = sortDate.dir; // 1=> ascending, -1 => descending

        var sortType = sortDate.type;
        var isEmptySort = sortDate.enSort || null;
        var compareResult = 0;

        switch (sortType) {
          case 'date':
            compareResult = dataCompareFunction(a, b, key, dir);
            break;

          case 'en':
            compareResult = emptyToNonEmptyCompare(a, b, key, dir);
            break;

          case 'ne':
            compareResult = emptyToNonEmptyCompare(a, b, key, dir); // dir must be -1 for "ne" to work

            break;

          case 'POD':
            compareResult = PODFileCompare(a, b, key, dir, isEmptySort);
            break;

          default:
            compareResult = numberOrStringCompare(a, b, key, dir);
            break;
        }

        if (compareResult === 0 && i != sortingSchema.length - 1) {
          return arrayCompareFunction(a, b, i + 1);
        } else {
          return compareResult;
        }
      };

      return arrayData.sort(function (a, b) {
        return arrayCompareFunction(a, b);
      });
    },
    fieldSorter: function fieldSorter(fields) {
      var isNumber = function isNumber(str) {
        return typeof str === 'number' || /^\d+$/.test(str);
      };

      return function (a, b) {
        return fields.map(function (item) {
          var o = item.order;
          var dir = 1;
          if (!o) return;

          if (o[0] === '-') {
            dir = -1;
            o = o.substring(1);
          }

          if (item.date) {
            var aDate, bDate;

            if (dir > 0) {
              aDate = a[o].data.split(';').sort(function (a, b) {
                return new Date(a) - new Date(b);
              })[0];
              bDate = b[o].data.split(';').sort(function (a, b) {
                return new Date(a) - new Date(b);
              })[0];
            } else {
              aDate = a[o].data.split(';').sort(function (a, b) {
                return new Date(b) - new Date(a);
              })[0];
              bDate = b[o].data.split(';').sort(function (a, b) {
                return new Date(b) - new Date(a);
              })[0];
            }

            if (new Date(aDate) > new Date(bDate)) return dir;
            if (new Date(aDate) < new Date(bDate)) return -dir;
            return 0;
          }

          if (isNumber(a[o].data) && isNumber(b[o].data)) {
            return dir > 0 ? a[o].data - b[o].data : b[o].data - a[o].data;
          } else {
            var result = a[o].data.localeCompare(b[o].data);
            return dir * result;
          }
        }).reduce(function firstNonZeroValue(p, n) {
          return p ? p : n;
        }, 0);
      };
    },
    handleSortSchema: function () {
      var _handleSortSchema = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee13(sortPayload) {
        var spreadsheetId, subsheetId, oldSortSchema, sortSchema, payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                spreadsheetId = this.spreadsheetId;
                subsheetId = this.subsheet.id;
                oldSortSchema = _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(this.sortSchema || {});
                sortSchema = _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(sortPayload || {});

                if (!(oldSortSchema === sortSchema)) {
                  _context13.next = 7;
                  break;
                }

                return _context13.abrupt("return");

              case 7:
                payload = {
                  id: spreadsheetId,
                  sheetId: subsheetId,
                  sortSchema: _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(sortPayload)
                };
                _context13.next = 10;
                return this.$store.dispatch('spreadsheet/updateSortSchema', payload);

              case 10:
                this.$vs.notify({
                  color: 'success',
                  title: 'Success',
                  text: 'Update Sort successfully'
                });
                this.setSortSchema(sortPayload);
                return _context13.abrupt("return", true);

              case 15:
                _context13.prev = 15;
                _context13.t0 = _context13["catch"](0);
                console.error(_context13.t0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: (((_context13.t0 || {}).response || {}).data || {}).message || "Something went wrong"
                });

              case 19:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[0, 15]]);
      }));

      return function handleSortSchema(_x15) {
        return _handleSortSchema.apply(this, arguments);
      };
    }(),
    setSortSchema: function setSortSchema(sortPayload) {
      /** Update SortSchema in parent instance */
      if (Array.isArray(sortPayload) && (sortPayload || []).length) {
        this.sortSchema = sortPayload;
      } else {
        this.sortSchema = null;
      }
      /** Update SortSchema in spreadSheetSort component */


      var _ref7 = this.$refs.spreadsheetSort || {},
          setSortSchema = _ref7.setSortSchema;

      if (setSortSchema) {
        this.$refs.spreadsheetSort.setSortSchema(this.sortSchema);
      }
    },
    exportToExcel: function exportToExcel() {
      if (this.subsheet.content.length) {
        var filename = "".concat(this.subsheetName, ".xlsx");
        var myRows = [];
        var columnWidth = [];
        var $headers = jquery__WEBPACK_IMPORTED_MODULE_11___default()("#table-".concat(this.subsheet.id, " th .table-heading"));
        var $filteredTableHeaders = []; // Filtered headers, remove 'Driver HOS', 'Find Carriers' columns

        $headers.each(function () {
          if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).html() !== 'Driver HOS' && jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).html() !== 'Find Carriers') {
            $filteredTableHeaders.push(this);
          }
        }); // Cell data

        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#table-".concat(this.subsheet.id, " tbody tr")).each(function (index) {
          var $cells = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).find('td .cell-export');
          myRows[index] = {};
          $cells.each(function (cellIndex) {
            if (jquery__WEBPACK_IMPORTED_MODULE_11___default()($filteredTableHeaders[cellIndex]).html() === 'POD') {
              if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).html() !== '') {
                myRows[index][jquery__WEBPACK_IMPORTED_MODULE_11___default()($filteredTableHeaders[cellIndex]).html()] = 'POD available';
              } else {
                myRows[index][jquery__WEBPACK_IMPORTED_MODULE_11___default()($filteredTableHeaders[cellIndex]).html()] = ' ';
              }
            } else if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).find('.vs__selected').length) {
              myRows[index][jquery__WEBPACK_IMPORTED_MODULE_11___default()($filteredTableHeaders[cellIndex]).html()] = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).find('.vs__selected').text().trim();
            } else {
              myRows[index][jquery__WEBPACK_IMPORTED_MODULE_11___default()($filteredTableHeaders[cellIndex]).html()] = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).val();
            }
          });
        });
        jquery__WEBPACK_IMPORTED_MODULE_11___default()("#table-".concat(this.subsheet.id, " .table-header")).each(function () {
          var width = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).width();
          columnWidth.push({
            wpx: width
          });
        });
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_23___default.a.utils.json_to_sheet(myRows);
        ws['!cols'] = columnWidth;
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_23___default.a.utils.book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_23___default.a.utils.book_append_sheet(wb, ws, this.subsheetName);
        xlsx__WEBPACK_IMPORTED_MODULE_23___default.a.writeFile(wb, filename);
      }
    },
    resizeColumnHeight: function resizeColumnHeight(event) {
      var _this8 = this;

      this.rowHeight = event.target.closest('div').dataset.size;
      var payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheet.id,
        rowHeight: this.rowHeight
      };
      this.$store.dispatch('spreadsheet/updateRowHeight', payload).catch(function (error) {
        _this8.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    },
    resizeColumWidth: function resizeColumWidth() {
      var thElm;
      var startOffset;
      var THIS = this;
      Array.prototype.forEach.call(document.querySelectorAll('.table-resizable th'), function (th) {
        th.style.position = 'relative';
        var grip = document.createElement('div');
        grip.classList.add('handleResizeble');
        grip.innerHTML = '&nbsp;';
        grip.addEventListener('mousedown', function (e) {
          e.preventDefault();
          thElm = th;
          startOffset = th.offsetWidth - e.pageX;
        });
        th.appendChild(grip);
      });
      document.addEventListener('mousemove', function (e) {
        if (thElm) {
          thElm.style.width = startOffset + e.pageX + 'px';
        }
      });
      document.addEventListener('mouseup', function (e) {
        if (thElm) {
          var columnId = thElm.getAttribute('id');
          var spreadsheetId = thElm.getAttribute('spreadsheetid');
          var sheetId = thElm.getAttribute('sheetid');
          var width = thElm.style.width;

          if (columnId && spreadsheetId && sheetId) {
            THIS.changeColumnWidth(width, sheetId, spreadsheetId, columnId);
          }
        }

        thElm = undefined;
      });
    },
    changeColumnWidth: function changeColumnWidth(width, sheetId, spreadsheetId, columnId) {
      if (this.accessLevel < 3) {
        var payload = {
          id: parseInt(spreadsheetId),
          sheetId: parseInt(sheetId),
          columnWidth: width,
          columnId: parseInt(columnId)
        };
        this.$store.dispatch('spreadsheet/changeColumnWidth', payload);
      }
    },
    handleRecord: function handleRecord(record, amount, predefinedColumn, customType) {
      if (customType) {
        if (customType === 'currency' && record) {
          return "".concat(record.toLocaleString());
        }

        return record;
      } else if ((amount || this.additionalCurrencyTypeFields.includes(predefinedColumn)) && record != null) {
        return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_27__["formatAmount"])(record);
      }

      if (predefinedColumn === 'loadGrossProfitPercentageBrokeredLoad' && record != null) {
        return "".concat(record, "%");
      } else if (predefinedColumn === 'loadContainerStatus' && record != null) {
        return _config_constants__WEBPACK_IMPORTED_MODULE_25__["default"].status.loadContainerStatuses.find(function (status) {
          return status.value === record;
        }).label;
      }

      return record;
    },
    openDeleteWarningDialog: function openDeleteWarningDialog(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Delete subsheet',
        text: 'Would you like to delete this subsheet?',
        accept: this.deleteSubsheet
      });
    },
    deleteSubsheet: function deleteSubsheet() {
      var _this9 = this;

      this.$vs.loading();
      var payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheet.id
      };
      this.$store.dispatch('spreadsheet/deleteSubsheet', payload).then(function (_ref8) {
        var data = _ref8.data;

        _this9.$vs.notify({
          color: 'success',
          title: 'Subsheet deleted',
          text: 'Subsheet deleted successfully'
        });
      }).catch(function (error) {
        _this9.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this9.updateSpreadsheet();

        _this9.$vs.loading.close();
      });
    },
    handleRename: function handleRename() {
      if (this.accessLevel <= 2) {
        this.modifySubsheetName = true;
      }
    },
    updateCellValue: function updateCellValue($event, record, cellId, customColumnId, customColumnUpdate, itemInfo) {
      var _this10 = this;

      var newData = $event.target.value;
      var columnId = itemInfo.columnId;

      var _ref9 = record[columnId] || {},
          oldData = _ref9.data;

      if (oldData === newData) {
        return;
      }

      var isDispatchNotes = (itemInfo || {}).predefinedColumn === 'loadDispatcherNotes';

      if (isDispatchNotes) {
        /** Dispatch notes update flow */
        var loadId = record.key_id;
        this.onChangeNote(loadId, cellId, newData);

        var _cellId$split = cellId.split('_'),
            _cellId$split2 = _slicedToArray(_cellId$split, 1),
            cellid = _cellId$split2[0];

        var getPredefinedColumns = jquery__WEBPACK_IMPORTED_MODULE_11___default()("td[predefinedcolumnid=".concat(cellid, "_loadDispatcherNotes]"));

        if (getPredefinedColumns.length > 1) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(getPredefinedColumns).each(function (i, element) {
            var cellId = jquery__WEBPACK_IMPORTED_MODULE_11___default()(element).attr('cellId');

            _this10.setTableData(cellId, newData);

            _this10.$emit('updateSameLoadData', {
              cellId: cellId,
              value: newData
            });
          });
        }
      } else if (customColumnId) {
        /** Custom cell Update flow */
        var timeoutId = record.key_id + '_' + customColumnId;

        if (this.customColumnCellTimerMap.has(timeoutId)) {
          clearTimeout(this.customColumnCellTimerMap.get(timeoutId));
        }

        var that = this;
        this.customColumnCellTimerMap.set(timeoutId, setTimeout(function () {
          that.$emit('update', $event, record, that.spreadsheetId, customColumnId);
        }, 1000)); //  This code update multiple custom column at once

        var getCustomColumns = jquery__WEBPACK_IMPORTED_MODULE_11___default()("td[customColumnId=".concat(customColumnUpdate, "]"));

        if (getCustomColumns.length > 1) {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(getCustomColumns).each(function (i, element) {
            var cellId = jquery__WEBPACK_IMPORTED_MODULE_11___default()(element).attr('cellId');

            _this10.setTableData(cellId, $event.target.value);

            _this10.$emit('updateSameLoadData', {
              cellId: cellId,
              value: $event.target.value
            });
          });
        } else {
          this.setTableData(cellId, $event.target.value);
        }
      }
    },
    handleModifySubsheetName: function handleModifySubsheetName(subSheetId) {
      var _this11 = this;

      if (!this.subsheetName) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Sheet name cannot be empty'
        });
        return;
      }

      var payload = {
        id: this.spreadsheetId,
        sheetId: subSheetId,
        name: this.subsheetName
      };
      this.$store.dispatch('spreadsheet/modifySheetName', payload).then(function (_ref10) {
        var data = _ref10.data;

        _this11.$emit('updateSpreadsheetName', payload);

        _this11.$vs.notify({
          color: 'success',
          title: 'Sheet rename',
          text: 'Sheet name updated successfully'
        });
      }).catch(function (error) {
        _this11.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this11.modifySubsheetName = false;
      });
    },
    //open ROC or BOL attachment
    openAttachmentDoc: function openAttachmentDoc(url) {
      if (url) window.open(url, '_blank');
    },
    // go to pod attachments
    openPodAttchments: function openPodAttchments(pod) {
      var _this12 = this;

      this.$vs.loading();
      this.$store.dispatch('spreadsheet/getPodUrl', pod).then(function (_ref11) {
        var data = _ref11.data;
        window.open(data.payload.url, '_blank');
      }).catch(function (error) {
        _this12.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this12.$vs.loading.close();
      });
    },
    // handle cell focus method
    handleColumnFocus: function handleColumnFocus(cellData) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('td').removeClass('cell-focus');
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.cells__input').addClass('line-clamp');
      jquery__WEBPACK_IMPORTED_MODULE_11___default()("[cellId=".concat(cellData.cellId, "]")).addClass('cell-focus');
      jquery__WEBPACK_IMPORTED_MODULE_11___default()("[cellId=".concat(cellData.cellId, "] .cells__input")).removeClass('line-clamp');
      this.selectedColumn = cellData;
    },
    //  get column field and props
    registerColumn: function registerColumn(field) {
      this.columnField.push(field);
    },
    saveFilter: function saveFilter(filters) {
      this.$parent.saveSheetsFilter(filters);
    },
    // updateSpreadsheet emit method
    updateSpreadsheet: function updateSpreadsheet(spreadsheetId) {
      this.$emit('updateSpreadsheet', spreadsheetId);
    },
    // expand record
    expandRecord: function expandRecord(item) {
      this.isSidebarActiveLocal = true;
      this.loadId = {
        loadId: item.key_id
      };
    },
    addNewLoad: function addNewLoad() {
      this.isSidebarActiveLocal = true;
      this.loadId = {};
    },
    closeSidebar: function closeSidebar() {
      this.isSidebarActiveLocal = false;
    },
    selectRow: function selectRow(_ref12) {
      var keyId = _ref12.keyId,
          selected = _ref12.selected;

      if (selected) {
        this.selectedRows.push(keyId);
      } else {
        this.selectedRows = this.selectedRows.filter(function (x) {
          return x !== keyId;
        });
      }
    },

    /* Apply Strick through condition to selected cell and row by updating "tableFormatMapping" */
    applyStrikethrough: function applyStrikethrough() {
      var _this13 = this;

      var rowsToFormat = [];
      /** Apply strikethrough style to individual cell */

      var cellId = (this.selectedColumn || {}).cellId || '';

      var _ref13 = cellId.split('_') || [],
          _ref14 = _slicedToArray(_ref13, 3),
          row = _ref14[0],
          column = _ref14[1],
          _ref14$ = _ref14[2],
          rowInt = _ref14$ === void 0 ? +row : _ref14$;

      if (row && column && !this.selectedRows.includes(rowInt)) {
        var _ref15 = ((this.tableFormatMapping || {})[row] || {})[column] || {},
            s = _ref15.s;

        this.tableFormatMapping[row][column].s = !s;
        this.selectedColumn.data.s = !s;
        rowsToFormat.push(row);
      }
      /** Apply style to individual row */


      this.selectedRows.forEach(function (rowId) {
        _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(_this13.tableFormatMapping[rowId]).forEach(function (col) {
          var _ref16 = ((_this13.tableFormatMapping || {})[rowId] || {})[col] || {},
              s = _ref16.s;

          _this13.tableFormatMapping[rowId][col].s = !s;
        });

        rowsToFormat.push(rowId);
      });
      this.reRenderTable();
      /* Trigger Update of row via API */

      this.updateSpreadsheetFormatting(rowsToFormat);
    },

    /* Apply CellColor to selected cell and row by updating "tableFormatMapping" */
    applyFormatFillColor: function applyFormatFillColor(payload) {
      var _this14 = this;

      var rowsToFormat = [];
      /** Apply style to individual cell */

      var cellId = (this.selectedColumn || {}).cellId || '';

      var _ref17 = cellId.split('_') || [],
          _ref18 = _slicedToArray(_ref17, 2),
          row = _ref18[0],
          column = _ref18[1];

      if (row && column) {
        this.tableFormatMapping[row][column].cc = payload;
        this.selectedColumn.data.cellColor = payload && 0 <= payload ? this.colorPalletSrc[payload - 1] : null;

        if (!this.selectedRows.includes(row)) {
          rowsToFormat.push(row);
        }
      }
      /** Apply style to individual row */


      this.selectedRows.forEach(function (rowId) {
        _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(_this14.tableFormatMapping[rowId]).forEach(function (col) {
          _this14.tableFormatMapping[rowId][col].cc = payload;
        });

        rowsToFormat.push(rowId);
      });
      this.reRenderTable();
      /* Trigger Update of row via API */

      this.updateSpreadsheetFormatting(rowsToFormat);
    },
    resetFormatFillColor: function resetFormatFillColor() {
      this.applyFormatFillColor(null);
    },

    /* Apply FontColor to selected cell and row by updating "tableFormatMapping" */
    applyFormatTextColor: function applyFormatTextColor(payload) {
      var _this15 = this;

      var rowsToFormat = [];
      /** Apply style to individual cell */

      var cellId = (this.selectedColumn || {}).cellId || '';

      var _ref19 = cellId.split('_') || [],
          _ref20 = _slicedToArray(_ref19, 2),
          row = _ref20[0],
          column = _ref20[1];

      if (row && column) {
        this.tableFormatMapping[row][column].fc = payload;
        this.selectedColumn.data.textColor = payload && 0 <= payload ? this.colorPalletSrc[payload - 1] : null;

        if (!this.selectedRows.includes(row)) {
          rowsToFormat.push(row);
        }
      }
      /** Apply style to individual row */


      this.selectedRows.forEach(function (rowId) {
        _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(_this15.tableFormatMapping[rowId]).forEach(function (col) {
          _this15.tableFormatMapping[rowId][col].fc = payload;
        });

        rowsToFormat.push(rowId);
      });
      this.reRenderTable();
      /* Trigger Update of row via API */

      this.updateSpreadsheetFormatting(rowsToFormat);
    },
    resetFormatTextColor: function resetFormatTextColor() {
      this.applyFormatTextColor(null);
    },

    /*generate "tableFormatMapping" object with full mapping of table cell formats done*/
    generateTableFormattingMaps: function generateTableFormattingMaps() {
      var _this16 = this;

      this.tableFormatMapping = {};
      this.value.forEach(function (record) {
        var keysToExclude = ['key_id', 'selected', 'refreshTrigger', 'format'];
        var row = record.key_id;
        _this16.tableFormatMapping[row] = {};

        var columns = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(record).filter(function (x) {
          return !keysToExclude.includes(x);
        });

        columns.forEach(function (col) {
          /* Expecting record[col] to hold a struct of
            record[col] =  { // record[col] is a sheet’s column id.
              b: true, // for bold
              i: true, // for italic
              s: true, // for strikethrough
              fc: 1 to 80, // font color, each number corresponds to one color used by Google Spreadsheet
              cc: 1 to 80, // cell color, each number corresponds to one color used by Google Spreadsheet
            },
          */
          var _ref21 = (record.format || {})[col] || {},
              s = _ref21.s,
              fc = _ref21.fc,
              cc = _ref21.cc;

          _this16.tableFormatMapping[row][col] = {
            s: s,
            fc: fc,
            cc: cc
          };
        });
      });
    },
    updateSpreadsheetFormatting: function updateSpreadsheetFormatting(rowIDs) {
      var _this17 = this;

      this.updatingCellFormat = true;
      var defaultColState = {
        s: false,
        b: false,
        i: false,
        fc: 1,
        cc: 10
      };

      var hasValue = function hasValue(data) {
        return !!_babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default()(data || {}).filter(Boolean).length;
      };

      var generateRowFormattingPayload = function generateRowFormattingPayload(rowID) {
        var rowToMap = _this17.tableFormatMapping[rowID];
        var payload = {};

        var _arr2 = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default()(rowToMap);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
              colId = _arr2$_i[0],
              value = _arr2$_i[1];

          var colformatValues = hasValue(value);

          if (colformatValues) {
            payload[colId] = {};
            if (value.s) payload[colId].s = value.s;
            if (value.fc && value.fc !== defaultColState.fc) payload[colId].fc = value.fc;
            if (value.cc && value.cc !== defaultColState.cc) payload[colId].cc = value.cc;
          }
        }

        return hasValue(payload) ? payload : null;
      };

      var formattedRowPayload = [];
      rowIDs.forEach(function (rowId) {
        var rowFormat = generateRowFormattingPayload(rowId);
        formattedRowPayload.push({
          keyId: rowId,
          format: rowFormat
        });
      });
      this.$store.dispatch('spreadsheet/updateSheetMultipleRowFormat', {
        id: this.spreadsheetId,
        sheetId: this.subsheet.id,
        rows: formattedRowPayload || null
      }).catch(function (error) {
        _this17.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
      this.updatingCellFormat = false;
    },

    /** Table being a mapped value and reactivity issues of vue with deep nesting,
     *  a force update is need to reflect changes to dom via computed properties using nested objects */
    reRenderTable: function reRenderTable() {
      this.refreshTrigger = new Date().getTime();
    },
    generateTableData: function generateTableData(value) {
      var tableData = {};
      value.forEach(function (row) {
        tableData[row.key_id] = row;
      });
      return tableData;
    },

    /** Update Dispatch Note cell */
    onChangeNote: function onChangeNote(loadId, cellId, updatedNote) {
      var _this18 = this;

      /* Only levels 1,2 & 3 have write permission  */
      if (this.isViewer || !loadId) {
        return;
      }

      try {
        if (this.dispatcherNoteTimerMap.has(loadId)) {
          clearTimeout(this.dispatcherNoteTimerMap.get(loadId));
        }

        this.setTableData(cellId, updatedNote);
        this.dispatcherNoteTimerMap.set(loadId, setTimeout(function () {
          var loadPayload = {
            id: loadId,
            payload: {
              dispatcher_notes: updatedNote
            }
          };

          _this18.$store.dispatch('load/updateLoadDispatcherNotes', loadPayload).then(function () {
            /*this.$vs.notify({
              color: "primary",
              title: "Dispatcher notes updated",
              text: "Load dispatcher notes updated successfully.",
            });*/
            // this.setTableData(cellId, updatedNote)
          }).catch(function (error) {
            _this18.$vs.notify({
              title: 'Error',
              text: error.response.data.message,
              color: 'danger'
            });
          });
        }, 1000));
      } catch (error) {
        console.log(error);
      }
    },
    setTableData: function setTableData(cellId, value) {
      var _ref22 = cellId.split('_') || [],
          _ref23 = _slicedToArray(_ref22, 2),
          row = _ref23[0],
          column = _ref23[1];

      if (row && column) {
        this.tableData[row][column] = value;
      }
    },
    updateSortSchema: function () {
      var _updateSortSchema = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee14(sortPayload) {
        var sortSchema, compareString, sortSchemaMap, index;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                sortSchema = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_6___default()(this.sortSchema || []));
                compareString = "".concat(sortPayload.predefinedColumn, "_").concat(sortPayload.columnId);
                sortSchemaMap = (this.sortSchema || []).map(function (x) {
                  if (x.order === 'a' || x.order === 'd') {
                    /** Since Sort from header supports only A-Z and Z-A, we are formatting those for selection */
                    return "".concat(x.predefinedColumn, "_").concat(x.columnId);
                  } else {
                    /** Since NonEmpty-Empty and Empty-NonEmpty are not to be overwrite, we add the "order" value to compare string as well*/
                    return "".concat(x.predefinedColumn, "_").concat(x.columnId, "_").concat(x.order);
                  }
                });
                index = sortSchemaMap.indexOf(compareString);

                if (index > -1) {
                  sortSchema.splice(index, 1);
                  sortSchema.unshift(sortPayload);
                } else if (sortSchema) {
                  sortSchema.unshift(sortPayload);
                } else {
                  sortSchema = [sortPayload];
                }

                _context14.next = 7;
                return this.handleSortSchema(sortSchema);

              case 7:
                /** Updates the new schema via api as well as syn it across all components */
                this.openSpreadsheetSort();
                /** Open Dropdown of spreadSheetSort component */

              case 8:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function updateSortSchema(_x16) {
        return _updateSortSchema.apply(this, arguments);
      };
    }(),
    openSpreadsheetSort: function openSpreadsheetSort() {
      /** Open Dropdown of spreadSheetSort component */
      var _ref24 = this.$refs.spreadsheetSort || {},
          openSortDropDown = _ref24.openSortDropDown;

      if (openSortDropDown) {
        openSortDropDown();
      }
    },
    getFieldSum: function getFieldSum(field) {
      var columnId = field.columnId,
          amount = field.amount,
          customType = field.customType,
          predefinedColumn = field.predefinedColumn;
      var isAmount = !!amount || customType === 'currency' || this.additionalCurrencyTypeFields.includes(predefinedColumn);
      var columnData = this.tableData ? _babel_runtime_core_js_object_values__WEBPACK_IMPORTED_MODULE_9___default()(this.tableData).map(function (x) {
        return x[columnId];
      }) : [];
      var sum = columnData.reduce(function (a, b) {
        return Number(a) + (Number(b) || 0);
      }, 0);
      return isAmount ? Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_27__["formatAmount"])(sum) : parseFloat(sum).toFixed(2);
    },
    removeExistingFilter: function removeExistingFilter(columnName) {
      this.$refs.filterField.removeFilter(columnName);
    },
    setCustomizedMergeLoads: function () {
      var _setCustomizedMergeLoads = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee15() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(this.selectedRows.length === 2)) {
                  _context15.next = 11;
                  break;
                }

                _context15.prev = 1;
                _context15.next = 4;
                return this.$store.dispatch('load/customizedMergeLoad', {
                  loads: this.selectedRows.map(function (x) {
                    return {
                      loadId: x
                    };
                  })
                });

              case 4:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Success',
                  text: 'Loads merged successfully.'
                });
                this.updateSpreadsheet(this.subsheet.id);
                _context15.next = 11;
                break;

              case 8:
                _context15.prev = 8;
                _context15.t0 = _context15["catch"](1);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  time: 8000,
                  text: (((_context15.t0 || {}).response || {}).data || {}).message || 'Something went wrong'
                });

              case 11:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[1, 8]]);
      }));

      return function setCustomizedMergeLoads() {
        return _setCustomizedMergeLoads.apply(this, arguments);
      };
    }(),
    calculateHours: function calculateHours(value) {
      if (value) {
        return Math.floor(value / 3600);
      }
    },
    calculateHoursMinutes: function calculateHoursMinutes(value) {
      if (value) {
        var hours = Math.floor(value / 3600);
        var minutes = Math.floor((value - hours * 3600) / 60);
        return "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));
      }
    },
    getHosTooltipContent: function getHosTooltipContent(driverName, label) {
      if (!this.isHosLabelVisible) {
        return "".concat(label, ": ").concat(driverName);
      } else {
        return driverName;
      }
    },
    toggleFindCarriersPanel: function toggleFindCarriersPanel(event, refName, loadId) {
      if ((this.$refs[refName] || [])[0]) {
        this.$refs[refName][0].toggle(event);
        if (loadId) this.findCarriers(loadId);
      }
    },
    closeOverlayPanel: function closeOverlayPanel(refName) {
      if ((this.$refs[refName] || [])[0]) {
        this.$refs[refName][0].hide();
      }
    },
    findCarriers: function () {
      var _findCarriers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee16(loadId) {
        var _ref25, availableTrucks;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this.availableTrucks = [];

                if (loadId) {
                  _context16.next = 3;
                  break;
                }

                return _context16.abrupt("return");

              case 3:
                _context16.prev = 3;
                _context16.next = 6;
                return this.$store.dispatch('truckpedia/searchByLoad', {
                  loadId: loadId
                });

              case 6:
                _ref25 = _context16.sent;
                availableTrucks = _ref25.payload.availableTrucks;

                if (availableTrucks && availableTrucks.length) {
                  this.availableTrucks = availableTrucks.sort(function (a, b) {
                    return a.rate - b.rate;
                  }).map(function (x) {
                    var _ref26 = x.company || {},
                        accessorialFees = _ref26.accessorialFees,
                        rest = _objectWithoutProperties(_ref26, ["accessorialFees"]);

                    var filteredAccessorialFees = _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_8___default()(accessorialFees || {}).sort().filter(function (_ref27) {
                      var _ref28 = _slicedToArray(_ref27, 2),
                          value = _ref28[1];

                      return value !== null;
                    }).reduce(function (obj, _ref29) {
                      var _ref30 = _slicedToArray(_ref29, 2),
                          key = _ref30[0],
                          value = _ref30[1];

                      obj[key] = value;
                      return obj;
                    }, {});

                    return _objectSpread({}, x, {
                      company: _objectSpread({}, rest),
                      filteredAccessorialFees: filteredAccessorialFees
                    });
                  });
                }

                _context16.next = 14;
                break;

              case 11:
                _context16.prev = 11;
                _context16.t0 = _context16["catch"](3);
                this.$vs.notify({
                  title: 'Error',
                  text: _context16.t0.response.data.message,
                  color: 'danger'
                });

              case 14:
                _context16.prev = 14;
                return _context16.finish(14);

              case 16:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[3, 11, 14, 16]]);
      }));

      return function findCarriers(_x17) {
        return _findCarriers.apply(this, arguments);
      };
    }(),
    handleFindCarriersSelect: function () {
      var _handleFindCarriersSelect = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee17(carrierData, loadId, overlayRef) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!(!carrierData || !carrierData.estimatedPrice || !carrierData.carrierCompanyId || !loadId)) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt("return");

              case 2:
                _context17.prev = 2;
                _context17.next = 5;
                return this.$store.dispatch('truckpedia/reserveByLoad', {
                  loadId: loadId,
                  estimatedPrice: carrierData.estimatedPrice,
                  carrierCompanyId: carrierData.carrierCompanyId
                });

              case 5:
                this.closeOverlayPanel(overlayRef);
                this.$vs.notify({
                  color: 'primary',
                  title: 'Success',
                  text: 'Truck reserved successfully.'
                });
                this.updateSpreadsheet(this.subsheet.id);
                _context17.next = 13;
                break;

              case 10:
                _context17.prev = 10;
                _context17.t0 = _context17["catch"](2);
                this.$vs.notify({
                  title: 'Error',
                  text: _context17.t0.response.data.message,
                  color: 'danger'
                });

              case 13:
                _context17.prev = 13;
                return _context17.finish(13);

              case 15:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[2, 10, 13, 15]]);
      }));

      return function handleFindCarriersSelect(_x18, _x19, _x20) {
        return _handleFindCarriersSelect.apply(this, arguments);
      };
    }(),
    handleCustomColumnInput: function handleCustomColumnInput(event, fieldType) {
      if (fieldType === 'currency') {
        var isDecimal = event.target.value.includes('.');

        if (isDecimal) {
          var _event$target$value$s = event.target.value.split('.'),
              _event$target$value$s2 = _slicedToArray(_event$target$value$s, 2),
              integer = _event$target$value$s2[0],
              decimal = _event$target$value$s2[1];

          if (decimal.length > 2) {
            event.target.value = "".concat(integer, ".").concat(decimal.slice(0, 2));
          }
        }
      } else if (fieldType === 'number') {
        /*
        1. You put down wrong regex.
        2. I don't understand why this code is needed.
        const regex = /^-?[0-9]\d*(\.\d+)?$/;
        const value = event.target.value;
        if (!regex.test(value)) {
          event.target.value = value.slice(0, -1);
        }
        */
      }
    },
    onModifySubsheetNameCancel: function onModifySubsheetNameCancel() {
      this.modifySubsheetName = false;
      this.subsheetName = this.subsheet.name;
    },
    resetPaymentReceivedPrompt: function resetPaymentReceivedPrompt() {
      this.paymentReceivedPrompt = {
        isActive: false,
        selectedLoad: null
      };
      this.receivedAmount = '';
    },
    submitMassInvoice: function () {
      var _submitMassInvoice = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee18(massInvoiceNumber) {
        var _this19 = this;

        var payload, _ref31, result;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                this.$vs.loading();
                payload = {
                  invoiceNumber: massInvoiceNumber,
                  loadIds: this.selectedRows
                };
                _context18.next = 5;
                return this.$store.dispatch('load/generateMassInvoice', payload);

              case 5:
                _ref31 = _context18.sent;
                result = _ref31.result;

                if (result) {
                  this.$vs.notify({
                    color: 'success',
                    title: 'Success',
                    text: 'Mass invoice submitted successfully'
                  });
                  this.isMassInvoicePopupActive = false;
                  this.$nextTick(function () {
                    _this19.updateSpreadsheet(_this19.subsheet.id);
                  });
                }

                _context18.next = 13;
                break;

              case 10:
                _context18.prev = 10;
                _context18.t0 = _context18["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_27__["getApiErrorMsg"])(_context18.t0)
                });

              case 13:
                _context18.prev = 13;
                this.$vs.loading.close();
                return _context18.finish(13);

              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[0, 10, 13, 16]]);
      }));

      return function submitMassInvoice(_x21) {
        return _submitMassInvoice.apply(this, arguments);
      };
    }()
  }, _defineProperty(_methods, "onConfirm", function onConfirm(options) {
    this.$vs.dialog(_objectSpread({
      type: 'confirm',
      color: 'primary',
      acceptText: 'Yes'
    }, options));
  }), _defineProperty(_methods, "requestMassInvoicePayment", function () {
    var _requestMassInvoicePayment = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee19() {
      var payload, _ref32, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              _context19.prev = 0;
              this.$vs.loading();
              payload = {
                loadIds: this.selectedRows
              };
              _context19.next = 5;
              return this.$store.dispatch('load/requestMassInvoicePayment', payload);

            case 5:
              _ref32 = _context19.sent;
              result = _ref32.result;

              if (result) {
                this.$vs.notify({
                  color: 'success',
                  title: 'Success',
                  text: 'Mass invoice payment requested.'
                });
                this.updateSpreadsheet(this.subsheet.id);
              }

              _context19.next = 13;
              break;

            case 10:
              _context19.prev = 10;
              _context19.t0 = _context19["catch"](0);
              this.$vs.notify({
                color: 'danger',
                title: 'Error',
                text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_27__["getApiErrorMsg"])(_context19.t0)
              });

            case 13:
              _context19.prev = 13;
              this.$vs.loading.close();
              return _context19.finish(13);

            case 16:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this, [[0, 10, 13, 16]]);
    }));

    return function requestMassInvoicePayment() {
      return _requestMassInvoicePayment.apply(this, arguments);
    };
  }()), _defineProperty(_methods, "onRequestMassInvoicePayment", function onRequestMassInvoicePayment() {
    var _this20 = this;

    var options = {
      title: 'Mass Invoice Payment Request',
      text: 'Are you sure you want to request mass invoice payment?',
      accept: function accept() {
        return _this20.requestMassInvoicePayment();
      }
    };
    this.onConfirm(options);
  }), _defineProperty(_methods, "multipleLoadsPaymentReceived", function () {
    var _multipleLoadsPaymentReceived = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee20() {
      var payload, _ref33, result;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              _context20.prev = 0;
              this.$vs.loading();
              payload = {
                loadIds: this.selectedRows
              };
              _context20.next = 5;
              return this.$store.dispatch('load/multipleLoadsPaymentReceived', payload);

            case 5:
              _ref33 = _context20.sent;
              result = _ref33.result;

              if (result) {
                this.$vs.notify({
                  color: 'success',
                  title: 'Success',
                  text: 'Payment status updated.'
                });
                this.updateSpreadsheet(this.subsheet.id);
              }

              _context20.next = 13;
              break;

            case 10:
              _context20.prev = 10;
              _context20.t0 = _context20["catch"](0);
              this.$vs.notify({
                color: 'danger',
                title: 'Error',
                text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_27__["getApiErrorMsg"])(_context20.t0)
              });

            case 13:
              _context20.prev = 13;
              this.$vs.loading.close();
              return _context20.finish(13);

            case 16:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this, [[0, 10, 13, 16]]);
    }));

    return function multipleLoadsPaymentReceived() {
      return _multipleLoadsPaymentReceived.apply(this, arguments);
    };
  }()), _defineProperty(_methods, "onMultipleLoadsPaymentReceived", function onMultipleLoadsPaymentReceived() {
    var _this21 = this;

    var options = {
      title: 'Payment Received',
      text: 'Are you sure you want to mark selected loads as paid?',
      accept: function accept() {
        return _this21.multipleLoadsPaymentReceived();
      }
    };
    this.onConfirm(options);
  }), _methods),
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.loadTimeout);
    this.dispatcherNoteTimerMap.clear();
    this.customColumnCellTimerMap.clear();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_swatches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-swatches */ "./node_modules/vue-swatches/dist/vue-swatches.umd.min.js");
/* harmony import */ var vue_swatches__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_swatches__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_swatches_dist_vue_swatches_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-swatches/dist/vue-swatches.css */ "./node_modules/vue-swatches/dist/vue-swatches.css");
/* harmony import */ var vue_swatches_dist_vue_swatches_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_swatches_dist_vue_swatches_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EZColorPicker',
  components: {
    VSwatches: vue_swatches__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      showDropDown: false
    };
  },
  computed: {
    colorPalletSrc: function colorPalletSrc() {
      return (_config_constants__WEBPACK_IMPORTED_MODULE_4__["default"] || {}).spreadSheetColorPickerPallet || [];
    },
    colorPallet: function colorPallet() {
      var createColorPallet2D = function createColorPallet2D(arr, rowSize) {
        var resArr = [];

        while (arr.length) {
          resArr.push(arr.splice(0, rowSize));
        }

        return resArr;
      };

      return createColorPallet2D(_toConsumableArray(this.colorPalletSrc), 10);
    }
  },
  methods: {
    emitInput: function emitInput(payload) {
      var payloadIndex = this.colorPalletSrc.indexOf(payload);

      if (payloadIndex >= 0 && payloadIndex < this.colorPalletSrc.length) {
        this.$emit('input', payloadIndex + 1);
      }
    },
    emitReset: function emitReset() {
      this.$emit('reset');
    },
    toggleDropDown: function toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
    closeDropDown: function closeDropDown() {
      this.showDropDown = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    hidden: {
      type: Boolean,
      default: null
    },
    field: {
      type: Number || String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: null
    },
    predefinedColumn: {
      type: String,
      default: null
    },
    customColumnId: {
      type: Number,
      default: null
    },
    order: {
      type: Number,
      default: null
    },
    amount: {
      type: Boolean,
      default: null
    },
    customType: {
      type: String,
      default: null
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var self = this;
      this.$parent.registerColumn({
        columnId: self.field,
        readonly: self.readonly,
        hidden: self.hidden,
        predefinedColumn: self.predefinedColumn,
        customColumnId: self.customColumnId,
        order: self.order,
        amount: self.amount,
        customType: self.customType
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ExpandColumn',
  props: {
    columns: {
      required: true,
      type: Object || Array
    },
    spreadsheetId: {
      required: true,
      type: Number
    }
  },
  computed: {
    header: function header() {
      return this.columns.headers;
    }
  },
  methods: {
    // on cell update
    onCellUpdate: function onCellUpdate(event, keyId, customColumnId) {
      var _this = this;

      var payload = {
        id: this.spreadsheetId,
        keyId: keyId,
        value: event.target.value,
        customColumnId: customColumnId
      };
      this.$store.dispatch('spreadsheet/updateCell', payload).catch(function (error) {
        _this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/object/entries */ "./node_modules/@babel/runtime/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Header',
  components: {
    CustomMultiSelect: function CustomMultiSelect() {
      return __webpack_require__.e(/*! import() */ 141).then(__webpack_require__.bind(null, /*! ./CustomMultiselect.vue */ "./resources/js/src/components/spreadsheet/components/CustomMultiselect.vue"));
    }
  },
  inject: ['allDrivers', 'allTags', 'allDispatchers', 'allCustomers'],
  data: function data() {
    return {
      rename: '',
      customFieldName: null,
      columnList: _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].spreadsheetLoadPredefinedColumns,
      searchInput: '',
      activeColumn: [],
      columnPayload: {},
      customColumnType: true,
      customColumns: {
        'Custom Column: Text': 'text',
        'Custom Column: Number': 'number',
        'Custom Column: Currency': 'currency'
      },
      columnPayloadType: '',
      existingCustomColumnId: [],
      createdCustomColumns: [],
      predefinedColumns: [],
      selectedCustomColums: [],
      dragStartOrder: null,
      dragEndOrder: null,
      deleteColumnId: null,
      filterConditions: {
        column: '',
        cmp: '',
        value: '',
        dateType: ''
      },
      dateOptions: [{
        text: 'today',
        value: 'today'
      }, {
        text: 'a specific date',
        value: 'date'
      }],
      operators: _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].spreadsheetColFilterOperators
    };
  },
  props: {
    spreadsheetId: {
      type: Number,
      required: true
    },
    headers: {
      required: true,
      type: Array
    },
    subsheetId: {
      type: Number,
      required: true
    },
    accessLevel: {
      required: false
    },
    sortingOptions: {
      type: Array,
      required: false,
      default: []
    },
    sortSchema: {
      type: Array,
      default: []
    },
    filters: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    nonSortableColumns: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])('auth', ['user', 'isUserBrokerOrShipper', 'companyFeatureAccess']), {
    brokerModeForSpecificCompany: function brokerModeForSpecificCompany() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].showBrokerModeForSpecificCompanyIds.includes(this.user.admin_company_detail_id) || this.companyFeatureAccess.includes('brokerModeForCarrier');
    },
    predefinedColumnList: function predefinedColumnList() {
      var excludeColsForBrokerOrShipper = ['loadDrivers', 'loadTrucks', 'loadTrailers', 'loadCustomer', 'loadDriverPay', 'loadInvoiceDate', 'loadDriverHos'];
      var columnList = {};

      if (this.isUserBrokerOrShipper) {
        columnList = Object.fromEntries(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_7___default()(this.columnList).filter(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              _ = _ref2[0],
              val = _ref2[1];

          return excludeColsForBrokerOrShipper.indexOf(val) < 0;
        }));
      } else {
        if (!this.brokerModeForSpecificCompany) {
          columnList = Object.fromEntries(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_7___default()(this.columnList).filter(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                _ = _ref4[0],
                val = _ref4[1];

            return val !== 'loadFindCarriers';
          }));
        }

        columnList = Object.fromEntries(_babel_runtime_core_js_object_entries__WEBPACK_IMPORTED_MODULE_7___default()(this.columnList));
      }

      return columnList;
    },
    validateSeletedColumn: function validateSeletedColumn() {
      if (this.activeColumn.length || this.predefinedColumns.length || this.existingCustomColumnId.length) {
        return false;
      }

      return true;
    },
    modifiedHeaders: function modifiedHeaders() {
      var _this = this;

      var filterableColumns = {
        loadShipDate: 'loadShipDate',
        loadDeliveryDate: 'loadDeliveryDate',
        loadShipperNames: 'loadShipper',
        loadReceiverNames: 'loadReceiver',
        loadDrivers: 'loadDriver',
        loadTag: 'loadTag',
        loadDispatcher: 'loadDispatcher',
        loadCustomer: 'loadCustomer',
        loadStatus: 'loadStatus',
        loadContainerStatus: 'loadContainerStatus',
        loadContainerLocation: 'loadContainerLocation',
        loadThirdPartyCarrier: 'loadThirdPartyCarrier'
      };
      return this.headers.map(function (item) {
        item.isFilterable = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(filterableColumns).includes(item.predefinedColumn);

        if (item.isFilterable) {
          item.filterColumnName = filterableColumns[item.predefinedColumn];
        }

        if (item.name === 'Bill To Code') {
          if (_this.showBillToCodeAsJobCode) {
            // Variable from accessMixin
            item.name = 'Job #';
          }
        }

        item.isSortable = (_this.nonSortableColumns || []).indexOf(item.predefinedColumn) === -1;
        return item;
      }).sort(function (a, b) {
        return a.order - b.order;
      });
    },
    sortSchemaMap: function sortSchemaMap() {
      return (this.sortSchema || []).reduce(function (acc, schema) {
        var string = "".concat(schema.predefinedColumn, "_").concat(schema.order, "_").concat(schema.columnId);
        acc[string] = schema;
        return acc;
      }, {});
    },
    driverOptions: function driverOptions() {
      var drivers = this.allDrivers() || [];
      return drivers.map(function (driver, index) {
        return _objectSpread({}, driver, {
          uniqueId: "".concat(driver.id, "_").concat(index)
        });
      });
    },
    tagOptions: function tagOptions() {
      return (this.allTags() || []).map(function (tag) {
        return _objectSpread({}, tag, {
          id: tag.tag_id,
          fullName: tag.business_name
        });
      });
    },
    dispatcherOptions: function dispatcherOptions() {
      return (this.allDispatchers() || []).map(function (dispatcher) {
        return _objectSpread({}, dispatcher, {
          fullName: "".concat(dispatcher.user_details.first_name, " ").concat(dispatcher.user_details.last_name),
          id: dispatcher.user_id
        });
      });
    },
    loadStatuses: function loadStatuses() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].status.loadWithLabels;
    },
    customerOptions: function customerOptions() {
      return (this.allCustomers() || []).filter(function (x) {
        return x.type !== 'carrier';
      });
    },
    thirdPartyCarrierOptions: function thirdPartyCarrierOptions() {
      return (this.allCustomers() || []).filter(function (x) {
        return x.type === 'carrier';
      });
    },
    isClearBtnDisabled: function isClearBtnDisabled() {
      var dateTypeColumns = ['loadShipDate', 'loadDeliveryDate'];
      var isDateType = dateTypeColumns.includes(this.filterConditions.column);

      if (isDateType) {
        return this.filterConditions.cmp === '' || this.filterConditions.dateType === '' || this.filterConditions.dateType !== 'today' && this.filterConditions.value === '';
      }

      if (this.filterConditions.column === 'loadThirdPartyCarrier') {
        if (this.filterConditions.cmp === 'isAnyOf') return this.filterConditions.value === '' || (this.filterConditions.value || []).length === 0;else return this.filterConditions.cmp === '';
      }

      return this.filterConditions.cmp === '' || this.filterConditions.value === '' || (this.filterConditions.value || []).length === 0;
    },
    disableCustomColumnNameInput: function disableCustomColumnNameInput() {
      var customColKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.customColumns);

      return !(this.activeColumn || []).some(function (item) {
        return customColKeys.includes(item);
      });
    },
    loadContainerStatuses: function loadContainerStatuses() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].status.loadContainerStatuses.map(function (_ref5) {
        var label = _ref5.label,
            value = _ref5.value;
        return {
          label: label,
          value: value.toLowerCase().charAt(0)
        };
      });
    },
    loadContainerLocation: function loadContainerLocation() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_8__["default"].status.loadContainerLocation;
    },
    predefinedAndCreatedColumns: function predefinedAndCreatedColumns() {
      var _this2 = this;

      var preArray = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(this.predefinedColumnList).map(function (key) {
        return {
          key: _this2.predefinedColumnList[key],
          name: key,
          preDefined: true
        };
      });

      var customCreatedArray = this.createdCustomColumns.map(function (item) {
        return _objectSpread({}, item, {
          preDefined: false
        });
      });

      var result = _toConsumableArray(preArray).concat(_toConsumableArray(customCreatedArray));

      if (this.searchInput) {
        result = result.filter(function (item) {
          return _this2.searchInput.toLocaleLowerCase().split(' ').every(function (word) {
            return item.name.toLocaleLowerCase().includes(word);
          });
        });
      }

      return this.getSortedColumns(result);
    }
  }),
  methods: {
    getSortedColumns: function getSortedColumns(arr) {
      https: //stackoverflow.com/questions/8996963/how-to-perform-case-insensitive-sorting-array-of-string-in-javascript
      return arr.sort(function (a, b) {
        return Intl.Collator().compare(a.name, b.name);
      });
    },
    openDeleteWarningDialog: function openDeleteWarningDialog(id) {
      this.deleteColumnId = id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Delete Column',
        text: 'Would you like to delete this column?',
        accept: this.deleteColumn
      });
    },
    dragStart: function dragStart(item) {
      this.dragStartOrder = item;
    },
    dropDown: function dropDown(item) {
      this.dragEndOrder = item;

      if (this.dragStartOrder.order !== this.dragEndOrder.order) {
        this.columnReOrderingApi(this.dragStartOrder, this.dragEndOrder);
      }
    },
    columnReOrderingApi: function columnReOrderingApi(start, end) {
      var _this3 = this;

      var payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        columnId: start.id,
        newOrder: end.order
      };
      this.$store.dispatch('spreadsheet/changeColumnOrder', payload).then(function (_ref6) {
        var data = _ref6.data;

        if (data.message === 'Ok') {
          _this3.$emit('updateSpreadsheet', _this3.spreadsheetId);
        }
      }).catch(function (error) {
        _this3.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    },
    deleteColumn: function deleteColumn() {
      var _this4 = this;

      this.$vs.loading();
      var payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        columnId: this.deleteColumnId
      };
      this.$store.dispatch('spreadsheet/deleteColumn', payload).then(function (_ref7) {
        var data = _ref7.data;

        _this4.$emit('updateSpreadsheet', _this4.spreadsheetId);

        _this4.$vs.notify({
          color: 'success',
          title: 'Delete Column',
          text: 'Column deleted successfully'
        });
      }).catch(function (error) {
        _this4.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this4.$vs.loading.close();
      });
    },
    getCreatedCustomColumns: function getCreatedCustomColumns() {
      var _this5 = this;

      var payload = {
        id: this.spreadsheetId
      };
      this.$store.dispatch('spreadsheet/getCreatedCustomColumns', payload).then(function (_ref8) {
        var data = _ref8.data;
        _this5.createdCustomColumns = data.payload;
      });
    },
    closeDropdown: function closeDropdown() {
      this.$refs.dropdownParentNode.click();
      this.activeColumn = '';
      this.columnPayloadType = '';
      this.customColumnType = true;
      this.customFieldName = null;
      this.predefinedColumns = [];
      this.existingCustomColumnId = [];
    },
    addOrRemoveColumn: function addOrRemoveColumn(array, column) {
      if (array.includes(column)) {
        array = array.filter(function (item) {
          return item != column;
        });
      } else {
        array.push(column);
      }
    },
    handleActiveColumn: function handleActiveColumn(column, type) {
      this.columnPayloadType = type;

      if (type == 'predefinedColumn') {
        if (this.predefinedColumns.includes(column)) {
          this.predefinedColumns = this.predefinedColumns.filter(function (item) {
            return item != column;
          });
        } else {
          this.predefinedColumns.push(column);
        }
      }

      if (type == 'customColumn') {
        if (this.activeColumn.includes(column)) {
          this.activeColumn = this.activeColumn.filter(function (item) {
            return item != column;
          });
        } else {
          // Only one custom column can be selected at a time
          this.activeColumn = [column];
        }
      }

      if (type == 'createdCustomColumns') {
        if (this.existingCustomColumnId.includes(column)) {
          this.existingCustomColumnId = this.existingCustomColumnId.filter(function (item) {
            return item != column;
          });
        } else {
          this.existingCustomColumnId.push(column);
        }
      }
    },
    handleCreateField: function handleCreateField() {
      var _this6 = this;

      this.columnPayload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        columns: []
      };
      this.predefinedColumns.map(function (item) {
        _this6.columnPayload.columns.push({
          predefinedColumn: item
        });
      });
      this.existingCustomColumnId.map(function (item) {
        _this6.columnPayload.columns.push({
          existingCustomColumnId: item
        });
      });

      if (this.activeColumn.length && !this.customFieldName) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Custom column name is required'
        });
        return;
      }

      if (this.customFieldName && this.activeColumn.length) {
        this.columnPayload.columns.push({
          name: this.customFieldName,
          customType: this.customColumns[this.activeColumn.find(Boolean)]
        });
      }

      this.$vs.loading();
      this.$store.dispatch('spreadsheet/addMultipleColumns', this.columnPayload).then(function () {
        _this6.$emit('updateSpreadsheet', _this6.spreadsheetId);

        _this6.$vs.notify({
          color: 'success',
          title: 'Add Column',
          text: 'Column added successfully'
        });
      }).catch(function (error) {
        _this6.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this6.$vs.loading.close();
      });
    },
    handleRename: function handleRename(column) {
      this.rename = column;
    },
    selectSortOption: function selectSortOption(selectedSort, columData) {
      var _ref9 = selectedSort || {},
          value = _ref9.value;

      var _ref10 = columData || {},
          id = _ref10.id,
          predefinedColumn = _ref10.predefinedColumn;

      var payload = {
        columnId: id,
        order: value,
        predefinedColumn: predefinedColumn
      };
      this.$emit('updateSort', payload);
    },
    sentenceCase: function sentenceCase(str) {
      if (str !== null || str !== '') {
        return Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["sentenceCase"])(str);
      }
    },
    resetFilterConditions: function resetFilterConditions(column) {
      var isArrayType = ['loadDriver', 'loadDispatcher', 'loadTag', 'loadCustomer', 'loadStatus', 'loadThirdPartyCarrier'];
      var value = isArrayType.includes(column) ? [] : '';
      var cmp = this.operators[column] && this.operators[column].length === 1 ? this.operators[column][0] : '';
      this.filterConditions = {
        column: column,
        cmp: cmp,
        value: value,
        dateType: ''
      };
    },
    validateFilterConditions: function validateFilterConditions(payload) {
      var column = payload.column,
          cmp = payload.cmp,
          value = payload.value;
      var isValid = column && cmp && (column === 'loadThirdPartyCarrier' && cmp === 'isAnyOf' ? Array.isArray(value) ? value.length : value : true);

      if (!isValid) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Filter condition is incomplete.'
        });
      }

      return isValid;
    },
    addNewFilter: function addNewFilter(filterColumnName, filterDropdownId) {
      var dateTypeColumns = ['loadShipDate', 'loadDeliveryDate'];
      var payload = {
        column: filterColumnName,
        cmp: this.filterConditions.cmp,
        value: this.filterConditions.value
      };

      if (dateTypeColumns.includes(filterColumnName) && this.filterConditions.dateType === 'today') {
        payload.value = this.filterConditions.dateType;
      }

      if (this.validateFilterConditions(payload)) {
        this.$emit('filterByThisField', payload);

        if (this.$refs[filterDropdownId]) {
          // Close dropdown after adding filter
          this.$refs[filterDropdownId][0].vsDropdownVisible = false;
          this.$refs[filterDropdownId][0].$children.filter(function (item) {
            return item.hasOwnProperty('dropdownVisible');
          }).forEach(function (item) {
            item.dropdownVisible = false;
          });
        }
      }
    },
    getExistingFilter: function getExistingFilter(columnName) {
      if (this.filters && this.filters.conditions && this.filters.conditions.length) {
        return this.filters.conditions.find(function (item) {
          return item.column === columnName;
        });
      } else return null;
    },
    initDropdownFilterOptions: function initDropdownFilterOptions(columnName) {
      var filter = this.getExistingFilter(columnName);

      if (filter) {
        this.filterConditions = {
          column: filter.column,
          cmp: filter.cmp,
          value: filter.value,
          dateType: filter.value === 'today' ? 'today' : 'date'
        };
      } else this.resetFilterConditions(columnName);
    },
    removeExistingFilter: function removeExistingFilter(filterColumnName, filterDropdownId) {
      if (this.getExistingFilter(filterColumnName)) {
        if (this.$refs[filterDropdownId]) {
          // Close dropdown after adding filter
          this.$refs[filterDropdownId][0].vsDropdownVisible = false;
          this.$refs[filterDropdownId][0].$children.filter(function (item) {
            return item.hasOwnProperty('dropdownVisible');
          }).forEach(function (item) {
            item.dropdownVisible = false;
          });
        }

        this.$emit('removeExistingFilter', filterColumnName);
      } else this.resetFilterConditions(filterColumnName);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SpreadsheetFilters',
  props: {
    subsheetId: {
      type: Number,
      required: true
    },
    spreadsheetId: {
      type: Number,
      required: true
    },
    filters: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    accessLevel: {
      required: false
    }
  },
  inject: ['allDrivers', 'allTags', 'allDispatchers', 'allCustomers', 'allTrucks', 'allTrailers']
  /** All 3 are reactive variables , so call them as functions in code */
  ,
  data: function data() {
    return {
      openFilterDropdown: false,
      filterJson: {},
      filterCondition: ['and', 'or'],
      columnsList: [{
        text: 'Ship Date',
        value: 'loadShipDate'
      }, {
        text: 'Del. Date',
        value: 'loadDeliveryDate'
      }, {
        text: 'Direction',
        value: 'loadDirection'
      }, {
        text: 'Shipper',
        value: 'loadShipper'
      }, {
        text: 'Receiver',
        value: 'loadReceiver'
      }, {
        text: 'Pickup State',
        value: 'loadPickupState'
      }, {
        text: 'Delivery State',
        value: 'loadDeliveryState'
      }, {
        text: 'Leg',
        value: 'loadLeg'
      }, {
        text: 'Driver',
        value: 'loadDriver'
      }, {
        text: 'Truck',
        value: 'loadTruck'
      }, {
        text: 'Trailer',
        value: 'loadTrailer'
      }, {
        text: 'Dispatcher',
        value: 'loadDispatcher'
      }, {
        text: 'Tag',
        value: 'loadTag'
      }, {
        text: 'Customer',
        value: 'loadCustomer'
      }, {
        text: 'Third Party Carrier',
        value: 'loadThirdPartyCarrier'
      }, {
        text: 'Status',
        value: 'loadStatus'
      }, {
        text: 'Container Status',
        value: 'loadContainerStatus'
      }, {
        text: 'Container Location',
        value: 'loadContainerLocation'
      }],
      shipperBrokerColumnsList: [{
        text: 'Ship Date',
        value: 'loadShipDate'
      }, {
        text: 'Del. Date',
        value: 'loadDeliveryDate'
      }, {
        text: 'Shipper',
        value: 'loadShipper'
      }, {
        text: 'Receiver',
        value: 'loadReceiver'
      }, {
        text: 'Dispatcher',
        value: 'loadDispatcher'
      }, {
        text: 'Tag',
        value: 'loadTag'
      }, {
        text: 'Third Party Carrier',
        value: 'loadThirdPartyCarrier'
      }, {
        text: 'Status',
        value: 'loadStatus'
      }, {
        text: 'Container Status',
        value: 'loadContainerStatus'
      }, {
        text: 'Container Location',
        value: 'loadContainerLocation'
      }],
      selectedDirection: '',
      direction: [{
        text: 'Inbound',
        value: 'i'
      }, {
        text: 'Outbound',
        value: 'o'
      }],
      dateOptions: [{
        text: 'today',
        value: 'today'
      }, {
        text: 'a specific date',
        value: 'date'
      }],
      selectedDate: '',
      selectedDateOption: [],
      operators: _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].spreadsheetColFilterOperators
    };
  },
  mounted: function mounted() {
    this.mountInitFilterData(this.filters);
  },
  watch: {
    selectedDateOption: {
      handler: function handler() {
        var _this = this;

        this.selectedDateOption.map(function (item, index) {
          if (item === 'today' && _this.filterJson.conditions[index]) {
            _this.filterJson.conditions[index].value = 'today';
          }
        });
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('auth', ['isUserBrokerOrShipper']), {
    filtersData: function filtersData() {
      return this.filterJson;
    },
    isFilterNotEmpty: function isFilterNotEmpty() {
      if (this.filterJson && _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.filterJson).length != 0 && this.filterJson.conditions.length) {
        return true;
      }

      return false;
    },
    operatorType: function operatorType() {
      var _ref;

      return _ref = {
        loadShipDate: 'date',
        loadDeliveryDate: 'date',
        loadDirection: 'direction'
      }, _defineProperty(_ref, "loadDirection", 'direction'), _defineProperty(_ref, "loadShipper", 'textFilter'), _defineProperty(_ref, "loadReceiver", 'textFilter'), _defineProperty(_ref, "loadLeg", 'textFilter'), _defineProperty(_ref, "loadDriver", 'valueFilter'), _defineProperty(_ref, "loadTruck", 'valueFilter'), _defineProperty(_ref, "loadTrailer", 'valueFilter'), _defineProperty(_ref, "loadPickupState", 'valueFilter'), _defineProperty(_ref, "loadDeliveryState", 'valueFilter'), _defineProperty(_ref, "loadDispatcher", 'valueFilter'), _defineProperty(_ref, "loadTag", 'valueFilter'), _defineProperty(_ref, "loadCustomer", 'valueFilter'), _defineProperty(_ref, "loadStatus", 'valueFilter'), _defineProperty(_ref, "loadThirdPartyCarrier", 'valueFilter'), _ref;
    },
    driverOptions: function driverOptions() {
      return this.allDrivers() || [];
    },
    truckOptions: function truckOptions() {
      return this.allTrucks() || [];
    },
    trailerOptions: function trailerOptions() {
      return this.allTrailers() || [];
    },
    tagOptions: function tagOptions() {
      return (this.allTags() || []).map(function (tag) {
        return _objectSpread({}, tag, {
          id: tag.tag_id,
          fullName: tag.business_name
        });
      });
    },
    statesOptions: function statesOptions() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].state_list;
    },
    dispatcherOptions: function dispatcherOptions() {
      return (this.allDispatchers() || []).map(function (dispatcher) {
        return _objectSpread({}, dispatcher, {
          fullName: "".concat(dispatcher.user_details.first_name, " ").concat(dispatcher.user_details.last_name),
          id: dispatcher.user_id
        });
      });
    },
    loadStatuses: function loadStatuses() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].status.loadWithLabels;
    },
    customerOptions: function customerOptions() {
      return (this.allCustomers() || []).filter(function (x) {
        return x.type !== 'carrier';
      });
    },
    thirdPartyCarrierOptions: function thirdPartyCarrierOptions() {
      return (this.allCustomers() || []).filter(function (x) {
        return x.type === 'carrier';
      });
    },
    filterableColumns: function filterableColumns() {
      return this.isUserBrokerOrShipper ? this.shipperBrokerColumnsList : this.columnsList;
    },
    loadContainerStatuses: function loadContainerStatuses() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].status.loadContainerStatuses.map(function (_ref2) {
        var label = _ref2.label,
            value = _ref2.value;
        return {
          label: label,
          value: value.toLowerCase().charAt(0)
        };
      });
    },
    loadContainerLocation: function loadContainerLocation() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].status.loadContainerLocation;
    }
  }),
  methods: {
    filterField: function filterField(_ref3) {
      var column = _ref3.column,
          cmp = _ref3.cmp,
          value = _ref3.value;
      this.openFilterPopup();
      var columnType = this.operatorType[column];

      if (!(this.filterJson.conditions || []).length) {
        this.filterJson = {
          conditions: [{
            column: column,
            cmp: cmp,
            value: value
          }],
          op: 'or'
        };

        if (columnType === 'date') {
          this.selectedDateOption.push(value === 'today' ? 'today' : 'date');
        } else {
          this.selectedDateOption.push(columnType);
        }
      } else {
        var existingFilterIndex = this.filters.conditions.findIndex(function (item) {
          return item.column === column;
        });

        if (existingFilterIndex > -1) {
          // update existing filter
          this.filterJson.conditions[existingFilterIndex] = {
            column: column,
            cmp: cmp,
            value: value
          };

          if (columnType === 'date') {
            this.selectedDateOption[existingFilterIndex] = value === 'today' ? 'today' : 'date';
          } else {
            this.selectedDateOption[existingFilterIndex] = columnType;
          }
        } else {
          this.filterJson.conditions.push({
            column: column,
            cmp: cmp,
            value: value
          });

          if (columnType === 'date') {
            this.selectedDateOption.push(value === 'today' ? 'today' : 'date');
          } else {
            this.selectedDateOption.push(columnType);
          }
        }
      }
    },
    handleDateOption: function handleDateOption(event, index) {
      if (event.target.value == 'date') {
        this.filterJson.conditions[index].value = '';
      }
    },
    handleFun: function handleFun(column, index) {
      var dateColumns = ['loadShipDate', 'loadDeliveryDate'];
      var directionColumns = ['loadDirection'];
      var nullFiledColumns = ['loadDriver', 'loadTrailer', 'loadTruck', 'loadDispatcher', 'loadTag', 'loadShipper', 'loadReceiver', 'loadPickupState', 'loadDeliveryState', 'loadLeg', 'loadCustomer', 'loadStatus', 'loadThirdPartyCarrier', 'loadContainerLocation'];

      if (directionColumns.includes(column)) {
        this.selectedDateOption[index] = 'i';
        this.filterJson.conditions[index].value = 'i';
        this.filterJson.conditions[index].cmp = (this.operators[column] || [])[0] || '';
      } else if (dateColumns.includes(column)) {
        if (this.selectedDateOption[index] != 'date') {
          this.selectedDateOption[index] = 'today';
          this.filterJson.conditions[index].value = 'today';
          var availableComparators = this.operators[column] || [];
          var previousComparator = this.filterJson.conditions[index].cmp || '';

          if (!availableComparators.includes(previousComparator)) {
            this.filterJson.conditions[index].cmp = availableComparators[0] || '';
          }
        }
      } else if (nullFiledColumns.includes(column)) {
        this.selectedDateOption[index] = '';
        this.filterJson.conditions[index].value = '';
        this.filterJson.conditions[index].cmp = (this.operators[column] || [])[0] || '';
      } else if (column === 'loadContainerStatus') {
        this.selectedDateOption[index] = 'e';
        this.filterJson.conditions[index].value = 'e';
        this.filterJson.conditions[index].cmp = (this.operators[column] || [])[0] || '';
      }
    },
    // open filter popup method
    openFilterPopup: function openFilterPopup() {
      this.mountInitFilterData(this.filters);
      this.openFilterDropdown = true;
    },
    // close filter popup method
    closeFilterPopup: function closeFilterPopup() {
      this.openFilterDropdown = false;
      this.filterJson = {};
      this.selectedDateOption = [];
    },
    // submit filter method
    submitFilter: function submitFilter() {
      var _this2 = this;

      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.filterJson).length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(this.filterJson.conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.column && item.column === 'loadThirdPartyCarrier' && item.cmp !== 'isAnyOf') {
              continue;
            } else if (!item.column || !item.value || Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isArray"])(item.value) && Object(lodash__WEBPACK_IMPORTED_MODULE_7__["isEmpty"])(item.value)) {
              this.$vs.notify({
                color: 'danger',
                title: 'Error',
                text: 'Filter condition is incomplete.'
              });
              return;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_4___default()(this.filterJson.conditions || []), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _item = _step2.value;

          if (_item.column === 'loadThirdPartyCarrier') {
            _item.value = _item.cmp !== 'isAnyOf' ? null : _item.value;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var payload = {
        id: this.spreadsheetId,
        sheetId: this.subsheetId,
        filter: this.filterJson
      };
      this.$vs.loading();
      this.$store.dispatch('spreadsheet/modifySheetFilter', payload).then(function () {
        _this2.$vs.notify({
          color: 'success',
          title: 'Sheet filter',
          text: 'Modify sheet filter successfully'
        });

        _this2.$parent.saveFilter({
          filter: _this2.filterJson,
          id: _this2.subsheetId
        });
      }).catch(function (error) {
        _this2.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this2.closeFilterPopup();

        _this2.$vs.loading.close();

        _this2.$emit('updateSpreadsheet');
      });
    },
    handleAddCondition: function handleAddCondition() {
      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.filterJson).length === 0) {
        this.filterJson = {
          conditions: [{
            column: '',
            cmp: 'is',
            value: ''
          }],
          op: 'or'
        };
      } else {
        this.filterJson.conditions.push({
          column: '',
          cmp: 'is',
          value: ''
        });
      }
    },
    deleteCondition: function deleteCondition(index) {
      this.filterJson.conditions.splice(index, 1);
      this.selectedDateOption.splice(index, 1);

      if (!this.filterJson.conditions.length) {
        this.filterJson = {};
      }
    },
    mountInitFilterData: function mountInitFilterData(filterData) {
      var _this3 = this;

      this.filterJson = JSON.parse(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(filterData));
      this.selectedDateOption = [];

      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(this.filterJson).length) {
        this.filterJson.conditions.map(function (item) {
          if (item.value == 'today') {
            _this3.selectedDateOption.push('today');
          } else {
            _this3.selectedDateOption.push(_this3.operatorType[item.column]);
          }
        });
      }
    },
    removeFilter: function removeFilter(field) {
      this.openFilterPopup();
      var index = this.filterJson.conditions.findIndex(function (item) {
        return item.column === field;
      });
      if (index > -1) this.deleteCondition(index);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SpreadsheetSort',
  props: {
    subsheetId: {
      type: Number,
      required: true
    },
    spreadsheetId: {
      type: Number,
      required: true
    },
    columns: {
      type: Array
    },
    sortSchemaData: {
      required: false
    },
    sortingOptions: {
      /**
       * TODO: Clarify who altered the prop name and removed 2 options
       * The component is using the declaration below ,
       * the one from parent is modified and prop name altered
       */
      type: Array,
      default: function _default() {
        return [{
          text: 'A → Z',
          value: 'a'
        }, {
          text: 'Z → A',
          value: 'd'
        }, {
          text: 'Empty → Nonempty',
          value: 'en'
        }, {
          text: 'Nonempty → Empty',
          value: 'ne'
        }];
      }
    }
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.setSortSchema(this.sortSchemaData);

            case 1:
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
  data: function data() {
    return {
      dropdown: false,
      columnsOptions: this.columns,
      sortingSchemaRawPayload: [
        /* Below structure shows the intended structure for sortingSchemaRawPayload
          {
            column: {
              * Column selected for first sort condition
            },
            sorting: {
              * Sorting selected for first sort condition
            }
          },
          {
            column: {
              * Column selected for 2nd sort condition
            },
            sorting: {
              * Sorting selected for 2nd sort condition
            }
          }
        */
      ]
    };
  },
  computed: {
    isSortExists: function isSortExists() {
      return this.sortingSchemaRawPayload.length > 0;
    },
    columnIdMap: function columnIdMap() {
      return this.columns.reduce(function (acc, column) {
        acc[column.id] = column;
        return acc;
      }, {});
    },
    sortingOptionsMap: function sortingOptionsMap() {
      return this.sortingOptions.reduce(function (acc, option) {
        acc[option.value] = option;
        return acc;
      }, {});
    }
  },
  methods: {
    setSortSchema: function setSortSchema() {
      var sortSchemaPayload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      /** Retain the null declaration above
       *  This method is called from parent via refs
       */
      var sortSchemaData = sortSchemaPayload || [];

      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(sortSchemaData).length > 0) {
        var columnIdMap = this.columnIdMap;
        var sortingOptionsMap = this.sortingOptionsMap;
        var sortingSchemaRawPayload = [];
        sortSchemaData.forEach(function (item) {
          var _ref = item || {},
              columnId = _ref.columnId,
              order = _ref.order;

          if (columnId && order) {
            var colValue = columnIdMap[columnId];
            var orderVal = sortingOptionsMap[order];

            if (colValue && orderVal) {
              sortingSchemaRawPayload.push({
                column: colValue,
                sorting: orderVal
              });
            }
          }
        });
        this.sortingSchemaRawPayload = sortingSchemaRawPayload;
      } else {
        this.sortingSchemaRawPayload = [];
      }
    },
    getSortColumnData: function getSortColumnData() {
      if (this.sortingSchemaRawPayload && this.sortingSchemaRawPayload.length > 0) {
        return this.sortingSchemaRawPayload.map(function (ele, i) {
          return {
            columnId: ele.column.id,
            order: ele.sorting.value,
            predefinedColumn: ele.column.predefinedColumn
          };
        });
      }

      return [];
    },
    updateSortSchemaPayload: function () {
      var _updateSortSchemaPayload = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
        var sortColumn;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sortColumn = this.getSortColumnData();
                this.$emit('handleSortSchema', sortColumn);
                return _context2.abrupt("return", sortColumn);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function updateSortSchemaPayload() {
        return _updateSortSchemaPayload.apply(this, arguments);
      };
    }(),
    handleAddColumnSort: function handleAddColumnSort(column) {
      var _this = this;

      this.sortingSchemaRawPayload.push({
        column: column,
        sorting: this.sortingOptions[0]
      });
      this.$nextTick(function () {
        _this.updateSortSchemaPayload();

        if (_this.$refs.addAnotherSortDropdown) {
          _this.$refs.addAnotherSortDropdown.dropdownVisible = false;
        }
      });
    },
    removeSort: function removeSort(index) {
      var _this2 = this;

      this.sortingSchemaRawPayload.splice(index, 1);
      this.$nextTick(function () {
        _this2.updateSortSchemaPayload();
      });
    },
    openSortDropDown: function openSortDropDown() {
      this.dropdown = true;
    },
    closeSortDropDown: function closeSortDropDown() {
      this.dropdown = false;
    },
    toggleSortDropDown: function toggleSortDropDown() {
      this.dropdown = !this.dropdown;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/object/define-property */ "./node_modules/@babel/runtime/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/core-js/map */ "./node_modules/@babel/runtime/core-js/map.js");
/* harmony import */ var _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_spreadsheet_SpreadsheetEditor_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/spreadsheet/SpreadsheetEditor.vue */ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue");
/* harmony import */ var _components_spreadsheet_components_Columns_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/spreadsheet/components/Columns.vue */ "./resources/js/src/components/spreadsheet/components/Columns.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_hosMixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/mixins/hosMixin */ "./resources/js/src/mixins/hosMixin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);











function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_3___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_2___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_5___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SpreadsheetEditor: _components_spreadsheet_SpreadsheetEditor_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Columns: _components_spreadsheet_components_Columns_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  name: 'Spreadsheet',
  data: function data() {
    return {
      spreadsheet: [],
      newSubsheetName: 'New Subsheet',
      newSpreadsheetName: '',
      accessLevel: null,
      filterJson: this.filterJsonCache ? new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_9___default.a(this.filterJsonCache) : new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_9___default.a(),
      allDrivers: [],
      allTags: [],
      allDispatchers: [],
      allCustomers: [],
      driverHos: [],
      amountCols: ['loadAmount', 'loadDriverPay', 'loadGrossProfitBrokeredLoad'],
      selectedSubsheetId: null,
      subsheetListStyle: {
        maxWidth: 'calc(100% - 268px)',
        whiteSpace: 'nowrap'
      },
      modifySheetId: '',
      viewMode: 'tab',
      spreadsheetViewOptions: [{
        id: 1,
        label: 'Tab',
        value: 'tab'
      }, {
        id: 2,
        label: 'List',
        value: 'list'
      }]
    };
  },
  provide: function provide() {
    var _this = this;

    return {
      allDispatchers: function allDispatchers() {
        return _this.allDispatchers;
      },
      allTags: function allTags() {
        return _this.allTags;
      },
      allDrivers: function allDrivers() {
        return _this.allDrivers;
      },
      allCustomers: function allCustomers() {
        return _this.allCustomers;
      }
    };
  },
  mixins: [_mixins_hosMixin__WEBPACK_IMPORTED_MODULE_13__["default"]],
  props: {
    selectedSheetId: {
      type: Number || String
    },
    selectedDateRange: {
      type: String || Date
    },
    filterJsonCache: {
      default: function _default() {
        return new _babel_runtime_core_js_map__WEBPACK_IMPORTED_MODULE_9___default.a();
      }
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
      var _this2 = this;

      var resizeObserver;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.getSpreadsheetData();

            case 2:
              _context.next = 4;
              return this.initializeDataForSpreadSheetFilters();

            case 4:
              // Watch width of spreadsheet container and update subsheet list style accordingly
              resizeObserver = new ResizeObserver(function (entries) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default()(entries), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var entry = _step.value;

                    if (entry.contentRect.width) {
                      _this2.subsheetListStyle.maxWidth = "".concat(entry.contentRect.width - 172, "px");
                    }
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              });
              resizeObserver.observe(this.$refs.spreadsheet);

            case 6:
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
  mounted: function mounted() {
    var _this3 = this;

    jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').click(function (event) {
      if (!jquery__WEBPACK_IMPORTED_MODULE_14___default()(event.target).closest('.spreadsheet-rename-input').length) {
        _this3.modifySheetId = '';
      }
    });
  },
  watch: {
    // Call on date range change
    selectedDateRange: function selectedDateRange() {
      this.getSpreadsheetData(this.selectedSubsheetId);
    },
    // Call on every spreadsheet change
    selectedSheetId: {
      handler: function handler() {
        this.getSpreadsheetData();
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_12__["mapGetters"])('auth', ['userRole', 'user'])),
  methods: {
    updateSameLoadData: function updateSameLoadData(cell) {
      if (cell) {
        var _ref = cell.cellId.split('_') || [],
            _ref2 = _slicedToArray(_ref, 2),
            row = _ref2[0],
            column = _ref2[1];

        this.spreadsheet.sheets.forEach(function (subsheet) {
          subsheet.content.forEach(function (content) {
            if (row == content.key_id) {
              content[column] = cell.value;
            }
          });
        });
      }
    },
    saveSheetsFilter: function saveSheetsFilter(filter) {
      this.filterJson.set(filter.id, filter.filter);
      this.$emit('updateFilterJson', this.filterJson);
    },
    addNewSubsheet: function addNewSubsheet() {
      var _this4 = this;

      this.$vs.loading();
      var payload = {
        id: this.selectedSheetId,
        name: this.newSubsheetName
      };
      this.$store.dispatch('spreadsheet/addSheet', payload).then(function (_ref3) {
        var data = _ref3.data;

        _this4.$vs.notify({
          color: 'success',
          title: 'Subsheet Added',
          text: 'Subsheet added successfully'
        });
      }).catch(function (error) {
        _this4.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this4.addSpreadsheetPopup = false;

        _this4.getSpreadsheetData(null, true);

        _this4.$vs.loading.close();
      });
    },
    // Get spreadsheet Data
    getSpreadsheetData: function getSpreadsheetData() {
      var _this5 = this;

      var selectedSubsheetId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var selectLastSubsheet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.selectedSheetId) return;
      this.$vs.loading();
      this.spreadsheet = [];
      var selectedDate = this.selectedDateRange.split(' to ');
      var filterData = [];
      this.filterJson.forEach(function (value, key) {
        filterData.push({
          id: key,
          filter: value
        });
      });
      var payload = {
        id: this.selectedSheetId,
        startDate: selectedDate[0],
        endDate: selectedDate[1] ? selectedDate[1] : selectedDate[0],
        sheets: filterData.length > 0 ? filterData : {}
      };
      console.log('get spreadsheet()', payload.startDate, payload.endDate);
      this.$store.dispatch('spreadsheet/getSpreadsheet', payload).then(function (_ref4) {
        var data = _ref4.data;
        _this5.spreadsheet = data.payload;

        _this5.spreadsheetAccessLevel(data.payload.accessLevel);

        _this5.spreadsheet.sheets.forEach(function (item) {
          _this5.saveSheetsFilter({
            filter: item.filter,
            id: item.id
          });
        });

        if (_this5.viewMode === 'tab') {
          if (selectedSubsheetId) {
            _this5.updateSelectedSubsheetId(selectedSubsheetId);

            _this5.$nextTick(function () {
              // Scroll to selected subsheet option
              if (_this5.$refs.subsheetList) {
                var selectedSubsheet = _this5.$refs.subsheetList.querySelector("#subsheet-".concat(selectedSubsheetId));

                if (selectedSubsheet) {
                  selectedSubsheet.scrollIntoView({
                    // behavior: "smooth",
                    block: 'nearest',
                    inline: 'start'
                  });
                }
              }
            });
          } else if (selectLastSubsheet) {
            _this5.selectedSubsheetId = _this5.spreadsheet.sheets[_this5.spreadsheet.sheets.length - 1].id;

            _this5.$nextTick(function () {
              if (_this5.$refs.subsheetList) {
                _this5.$refs.subsheetList.scrollLeft = _this5.$refs.subsheetList.scrollWidth;
              }
            });
          } else {
            _this5.selectedSubsheetId = _this5.spreadsheet.sheets[0].id;
          }
        }

        var hasHosCol = _this5.spreadsheet.sheets.some(function (sheet) {
          return sheet.columns.some(function (_ref5) {
            var predefinedColumn = _ref5.predefinedColumn;
            return predefinedColumn === 'loadDriverHos';
          });
        });

        if (hasHosCol) _this5.getDriverHos();
      }).catch(function (error) {
        _this5.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this5.$vs.loading.close();
      });
    },
    // on cell update
    onCellUpdate: function onCellUpdate(event, row, spreadsheetId, customColumnId) {
      var _this6 = this;

      console.log('update cell api');
      var payload = {
        id: spreadsheetId,
        keyId: row.key_id,
        value: event.target.value,
        customColumnId: customColumnId
      };
      this.$store.dispatch('spreadsheet/updateCell', payload).catch(function (error) {
        _this6.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      });
    },
    spreadsheetAccessLevel: function spreadsheetAccessLevel(accessLevelProperty) {
      var _this7 = this;

      var accessLevelArray = [{
        level: 1,
        role: 'owner'
      }, {
        level: 2,
        role: 'admin'
      }, {
        level: 3,
        role: 'editor'
      }, {
        level: 4,
        role: 'viewer'
      }];

      if (accessLevelProperty) {
        accessLevelArray.map(function (item) {
          if (accessLevelProperty == item.role) {
            _this7.$parent.setAccessLevel(item.level);

            _this7.accessLevel = item.level;
          }
        });
      } else {
        this.$parent.setAccessLevel(null);
        this.accessLevel = null;
      }
    },
    initializeDataForSpreadSheetFilters: function () {
      var _initializeDataForSpreadSheetFilters = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                /** Try catch is not used here, but at individual api call level
                 * so as to not block the api call flow incase one fails
                 */
                this.getAllDrivers();
                this.getAllTags();
                this.getAllDispatchers();
                this.getAllCustomers();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function initializeDataForSpreadSheetFilters() {
        return _initializeDataForSpreadSheetFilters.apply(this, arguments);
      };
    }(),
    getAllDrivers: function () {
      var _getAllDrivers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        var allDrivers;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.$store.dispatch('driverV2/getAllDrivers');

              case 3:
                allDrivers = _context3.sent;

                if (allDrivers) {
                  this.allDrivers = allDrivers;
                }

                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      return function getAllDrivers() {
        return _getAllDrivers.apply(this, arguments);
      };
    }(),
    getAllTags: function () {
      var _getAllTags = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4() {
        var _ref6, allTags;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch('tag/getAllTags');

              case 3:
                _ref6 = _context4.sent;
                allTags = _ref6.payload.data;

                if (allTags) {
                  this.allTags = allTags;
                }

                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      return function getAllTags() {
        return _getAllTags.apply(this, arguments);
      };
    }(),
    getAllDispatchers: function () {
      var _getAllDispatchers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5() {
        var _ref7, allDispatchers;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.$store.dispatch('company-user/getAllDispatchers');

              case 3:
                _ref7 = _context5.sent;
                allDispatchers = _ref7.payload.data;

                if (allDispatchers) {
                  this.allDispatchers = allDispatchers;
                }

                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      return function getAllDispatchers() {
        return _getAllDispatchers.apply(this, arguments);
      };
    }(),
    getAllCustomers: function () {
      var _getAllCustomers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6() {
        var _ref8, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.$store.dispatch('customer/getAllCustomers');

              case 3:
                _ref8 = _context6.sent;
                data = _ref8.payload.data;
                this.allCustomers = data || [];
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                console.error(_context6.t0);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      return function getAllCustomers() {
        return _getAllCustomers.apply(this, arguments);
      };
    }(),
    getDriverHos: function () {
      var _getDriverHos = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee7() {
        var _ref9, status, hos;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.$store.dispatch('hos/fetchHos');

              case 3:
                _ref9 = _context7.sent;
                status = _ref9.status;
                hos = _ref9.data.payload.hos;

                if (status === 200 && hos && hos.length) {
                  this.driverHos = _toConsumableArray(hos);
                  this.initDriverHosColData();
                }

                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);
                console.error(_context7.t0);

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 9]]);
      }));

      return function getDriverHos() {
        return _getDriverHos.apply(this, arguments);
      };
    }(),
    initDriverHosColData: function initDriverHosColData() {
      var _this8 = this;

      if (this.driverHos && this.driverHos.length) {
        ((this.spreadsheet || {}).sheets || []).forEach(function (subsheet) {
          var driverHosColIds = subsheet.columns.filter(function (col) {
            return col.predefinedColumn === 'loadDriverHos';
          }).map(function (col) {
            return col.id;
          });

          if (driverHosColIds && driverHosColIds.length) {
            driverHosColIds.forEach(function (driverHosColId) {
              subsheet.content.forEach(function (row) {
                if (row[driverHosColId] && row[driverHosColId].length) {
                  row[driverHosColId].map(function (_ref10, index) {
                    var fn = _ref10.fn,
                        ln = _ref10.ln;

                    if (fn || ln) {
                      var nameString = "".concat(fn || '', " ").concat(ln || '').trim();

                      var formattedHosVal = _this8.initHosData(_this8.driverHos, fn, ln);

                      if (formattedHosVal) {
                        row[driverHosColId][index] = _objectSpread({}, row[driverHosColId][index], {
                          driverName: nameString
                        }, formattedHosVal);
                      }
                    }
                  });
                }
              });
            });
          }
        });
        if (this.$refs.spreadsheetEditor[0]) this.$refs.spreadsheetEditor[0].reRenderTable();
      }
    },
    updateSelectedSubsheetId: function updateSelectedSubsheetId(id) {
      this.selectedSubsheetId = id;
    },
    updateSpreadsheetNameLocally: function updateSpreadsheetNameLocally(_ref11) {
      var sheetId = _ref11.sheetId,
          name = _ref11.name;
      if (!sheetId || !name) return;
      var sheetIndex = this.spreadsheet.sheets.findIndex(function (sheet) {
        return sheet.id === sheetId;
      });

      if (sheetIndex > -1) {
        this.spreadsheet.sheets[sheetIndex].name = name;
      }

      if (this.$refs.spreadsheetEditor) {
        this.$refs.spreadsheetEditor.forEach(function (editor) {
          if (editor.subsheet.id === sheetId) {
            editor.subsheetName = name;
          }
        });
      }
    },
    refreshSpreadsheet: function refreshSpreadsheet() {
      this.getSpreadsheetData(this.selectedSubsheetId);
    },
    handleRename: function handleRename(itemId) {
      if (this.accessLevel <= 2) {
        this.modifySheetId = itemId;
      }
    },
    modifySubsheetName: function modifySubsheetName(value, subSheetId) {
      var _this9 = this;

      if (!value) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Sheet name cannot be empty'
        });
        return;
      }

      var payload = {
        id: this.spreadsheet.id,
        sheetId: subSheetId,
        name: value
      };
      this.$store.dispatch('spreadsheet/modifySheetName', payload).then(function (_ref12) {
        var data = _ref12.data;

        _this9.updateSpreadsheetNameLocally(payload);

        _this9.$vs.notify({
          color: 'success',
          title: 'Sheet rename',
          text: 'Sheet name updated successfully'
        });
      }).catch(function (error) {
        _this9.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this9.modifySheetId = '';
      });
    },
    toggleOverlayPanel: function toggleOverlayPanel(event, ref) {
      if (this.$refs[ref][0]) {
        this.$refs[ref][0].toggle(event);
      }
    },
    viewChange: function viewChange() {
      if (this.spreadsheet && this.spreadsheet.sheets && this.spreadsheet.sheets.length > 0) {
        this.selectedSubsheetId = this.spreadsheet.sheets[0].id;
      }
    },
    isSubsheetVisible: function isSubsheetVisible(subsheetId) {
      if (this.viewMode === 'list') return true;
      return this.selectedSubsheetId == subsheetId;
    },
    openDeleteWarningDialog: function openDeleteWarningDialog(id) {
      var _this10 = this;

      this.$vs.dialog({
        type: 'confirm',
        color: 'warning',
        title: 'Delete subsheet',
        text: 'Would you like to delete this subsheet?',
        accept: function accept() {
          return _this10.deleteSubsheet(id);
        }
      });
    },
    deleteSubsheet: function deleteSubsheet(id) {
      var _this11 = this;

      this.$vs.loading();
      var payload = {
        id: this.spreadsheet.id,
        sheetId: id
      };
      this.$store.dispatch('spreadsheet/deleteSubsheet', payload).then(function (_ref13) {
        var data = _ref13.data;

        _this11.$vs.notify({
          color: 'success',
          title: 'Subsheet deleted',
          text: 'Subsheet deleted successfully'
        });
      }).catch(function (error) {
        _this11.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        });
      }).finally(function () {
        _this11.getSpreadsheetData();

        _this11.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true& ***!
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

  return _c("div", {
    staticClass: "spreadsheet-editor"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_vm.modifySubsheetName ? _c("div", {
    staticClass: "flex items-center mt-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subsheetName,
      expression: "subsheetName"
    }],
    staticClass: "subsheet-rename-input",
    domProps: {
      value: _vm.subsheetName
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.handleModifySubsheetName(_vm.subsheet.id);
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.subsheetName = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "cursor-pointer",
    staticStyle: {
      position: "relative",
      right: "16px"
    },
    on: {
      click: _vm.onModifySubsheetNameCancel
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "close"
    }
  })], 1)]) : _c("div", {
    class: ["sheet-name", {
      "sheet-name-hover": _vm.accessLevel < 3
    }],
    on: {
      dblclick: _vm.handleRename
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.subsheetName))]), _vm._v(" "), _c("div", {
    staticClass: "absolute right-0"
  }, [_c("div", {
    staticClass: "show-on-hover ml-1 mt-1"
  }, [_c("vs-dropdown", {
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
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
      d: "M7 10l5 5 5-5z"
    }
  })]), _vm._v(" "), _c("vs-dropdown-menu", {
    staticClass: "spreadsheet-list-dropdown-items"
  }, [_c("vs-dropdown-item", [_c("p", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.handleRename.apply(null, arguments);
      }
    }
  }, [_vm._v("Rename Subsheet")])]), _vm._v(" "), _c("vs-dropdown-item", [_c("p", {
    staticClass: "text-danger",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.openDeleteWarningDialog(_vm.subsheet.id);
      }
    }
  }, [_vm._v("\n                  Delete Subsheet\n                ")])])], 1)], 1)], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "table-tools flex items-center space-x-5"
  }, [_c("div", {
    staticClass: "spreadsheet-filters"
  }, [_c("spreadsheet-filters", {
    ref: "filterField",
    attrs: {
      filters: _vm.subsheet.filter,
      subsheetId: _vm.subsheet.id,
      spreadsheetId: _vm.spreadsheetId,
      accessLevel: _vm.accessLevel
    },
    on: {
      updateSpreadsheet: function updateSpreadsheet($event) {
        return _vm.updateSpreadsheet(_vm.subsheet.id);
      }
    }
  })], 1), _vm._v(" "), _c("spreadsheet-sort", {
    ref: "spreadsheetSort",
    attrs: {
      sortSchemaData: _vm.subsheet.sortSchema,
      columns: _vm.sortHeaders,
      subsheetId: _vm.subsheet.id,
      spreadsheetId: _vm.spreadsheetId
    },
    on: {
      handleSortSchema: _vm.handleSortSchema
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "spreadsheet-height-changer"
  }, [_c("vs-dropdown", {
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("div", {
    staticClass: "flex items-center cursor-pointer mt-1"
  }, [_c("img", {
    staticClass: "mr-2",
    attrs: {
      src: _vm.rowHeightIcon
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-row-height"
  }, [_vm._v("Row Height")])]), _vm._v(" "), _c("vs-dropdown-menu", {
    staticClass: "spreadsheet-list-dropdown-items"
  }, [_c("vs-dropdown-item", [_c("div", {
    staticClass: "flex items-center",
    class: {
      "text-primary": _vm.rowHeight === "short"
    },
    attrs: {
      "data-size": "short"
    },
    on: {
      click: _vm.resizeColumnHeight
    }
  }, [_c("img", {
    attrs: {
      src: _vm.rowHeightShortIcon
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-1"
  }, [_vm._v("Short")])])]), _vm._v(" "), _c("vs-dropdown-item", [_c("div", {
    staticClass: "flex items-center",
    class: {
      "text-primary": _vm.rowHeight === "medium"
    },
    attrs: {
      "data-size": "medium"
    },
    on: {
      click: _vm.resizeColumnHeight
    }
  }, [_c("img", {
    attrs: {
      src: _vm.rowHeightMediumIcon
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-1"
  }, [_vm._v("Medium")])])]), _vm._v(" "), _c("vs-dropdown-item", [_c("div", {
    staticClass: "flex items-center",
    class: {
      "text-primary": _vm.rowHeight === "tall"
    },
    attrs: {
      "data-size": "tall"
    },
    on: {
      click: _vm.resizeColumnHeight
    }
  }, [_c("img", {
    attrs: {
      src: _vm.rowHeightTallIcon
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-1"
  }, [_vm._v("Tall")])])])], 1)], 1)], 1), _vm._v(" "), !_vm.isViewer ? _c("div", {
    staticClass: "formatter-block"
  }, [_c("div", {
    staticClass: "formatter-icon",
    on: {
      click: _vm.applyStrikethrough
    }
  }, [_c("svg", {
    attrs: {
      id: "strikethrough_s",
      fill: "#626262",
      xmlns: "http://www.w3.org/2000/svg",
      height: "20",
      width: "20"
    }
  }, [_c("path", {
    attrs: {
      d: "M10.125 15.917q-1.5 0-2.625-.875T6 12.729l1.688-.687q.333 1.062.968 1.604.636.542 1.511.542.937 0 1.489-.448t.552-1.198q0-.334-.125-.615-.125-.281-.375-.51h2.146q.104.229.136.489.031.261.031.615 0 1.5-1.083 2.448-1.084.948-2.813.948ZM2 9.917v-1.5h16v1.5Zm8-6q1.333 0 2.208.562.875.563 1.417 1.792L12 6.979q-.229-.625-.76-1.01-.532-.386-1.198-.386-.771 0-1.282.375-.51.375-.552.959H6.396q.042-1.313 1.062-2.157Q8.479 3.917 10 3.917Z"
    }
  })])]), _vm._v(" "), _c("ColorPicker", {
    attrs: {
      value: _vm.textFormatColorSelected
    },
    on: {
      input: _vm.applyFormatTextColor,
      reset: _vm.resetFormatTextColor
    },
    scopedSlots: _vm._u([{
      key: "trigger",
      fn: function fn() {
        return [_c("div", {
          staticClass: "formatter-icon"
        }, [_c("svg", {
          attrs: {
            id: "format_color_text",
            "enable-background": "new 0 0 20 20",
            height: "15px",
            viewBox: "0 0 20 20",
            width: "15px",
            fill: "#626262"
          }
        }, [_c("g", [_c("g", [_c("rect", {
          attrs: {
            height: "4",
            width: "16",
            x: "2",
            y: "16",
            fill: _vm.textFormatColorSelected
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            d: "M7.99,10.44h4.04L12.92,13h1.73L10.89,3H9.11L5.35,13h1.73L7.99,10.44z M9.57,6.02l0.39-1.16h0.08l0.39,1.16l1.06,2.98 H8.51L9.57,6.02z"
          }
        })])])])])];
      },
      proxy: true
    }], null, false, 2819856867)
  }), _vm._v(" "), _c("ColorPicker", {
    attrs: {
      value: _vm.fillFormatColorSelected
    },
    on: {
      input: _vm.applyFormatFillColor,
      reset: _vm.resetFormatFillColor
    },
    scopedSlots: _vm._u([{
      key: "trigger",
      fn: function fn() {
        return [_c("div", {
          staticClass: "formatter-icon"
        }, [_c("svg", {
          attrs: {
            id: "format_color_fill",
            "enable-background": "new 0 0 20 20",
            height: "15px",
            viewBox: "0 0 20 20",
            width: "15px",
            fill: "#626262"
          }
        }, [_c("g", [_c("g", [_c("path", {
          attrs: {
            d: "M15.25,14c0.96,0,1.75-0.79,1.75-1.75c0-1.16-1.75-3.06-1.75-3.06s-1.75,1.9-1.75,3.06C13.5,13.21,14.29,14,15.25,14z"
          }
        }), _vm._v(" "), _c("rect", {
          attrs: {
            height: "4",
            width: "16",
            x: "2",
            y: "16",
            fill: _vm.fillFormatColorSelected
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            d: "M7.03,12.6C7.3,12.87,7.65,13,8,13s0.7-0.13,0.97-0.4l3.63-3.63c0.53-0.53,0.53-1.4,0-1.93L5.57,0L4.51,1.06l2.43,2.43 L3.4,7.03c-0.53,0.53-0.53,1.4,0,1.93L7.03,12.6z M8,4.56L11.44,8H4.56L8,4.56z"
          }
        })])])])])];
      },
      proxy: true
    }], null, false, 896488466)
  })], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "flex items-center cursor-pointer",
    on: {
      click: _vm.exportToExcel
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "file_download"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Export")])], 1), _vm._v(" "), _vm.selectedRows && _vm.selectedRows.length > 0 ? _c("div", {
    staticClass: "deleteButton",
    on: {
      click: function click($event) {
        return _vm.onConfirmMultipleSpreadsSheetDeleted();
      }
    }
  }, [_vm._v("\n      Delete\n    ")]) : _vm._e(), _vm._v(" "), _vm.hasDefaultGLAccess && _vm.selectedRows.length === 2 ? _c("div", {
    staticClass: "flex items-center cursor-pointer",
    on: {
      click: _vm.setCustomizedMergeLoads
    }
  }, [_c("span", [_vm._v("Merge Transplace Loads")])]) : _vm._e(), _vm._v(" "), _vm.isBatchActionsVisible ? [_c("vs-dropdown", {
    staticClass: "cursor-pointer"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("span", {
    staticClass: "text-row-height"
  }, [_vm._v("Batch Actions")]), _vm._v(" "), _c("chevron-down-icon", {
    staticClass: "ml-2",
    attrs: {
      size: "1x"
    }
  })], 1), _vm._v(" "), _c("vs-dropdown-menu", [_c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.isMassInvoicePopupActive = true;
      }
    }
  }, [_vm._v("\n              Generate Mass Invoice\n            ")])], 1), _vm._v(" "), _c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.onRequestMassInvoicePayment
    }
  }, [_vm._v("\n              Request Mass Invoice Payment\n            ")])], 1), _vm._v(" "), _c("vs-dropdown-item", {
    attrs: {
      divider: ""
    }
  }, [_c("vs-button", {
    staticClass: "w-full",
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.onMultipleLoadsPaymentReceived
    }
  }, [_vm._v("\n              Payment Received\n            ")])], 1)], 1)], 1)] : _vm._e()], 2), _vm._v(" "), _c("div", {
    class: ["overflow-x-auto", {
      "height-screen table-container": _vm.viewMode === "tab"
    }]
  }, [_c("table", {
    staticClass: "spreadsheet-table table-resizable",
    attrs: {
      id: "table-".concat(_vm.subsheet.id)
    }
  }, [_c("spreadsheet-header", {
    attrs: {
      spreadsheetId: _vm.spreadsheetId,
      headers: _vm.headers,
      subsheetId: _vm.subsheet.id,
      accessLevel: _vm.accessLevel,
      sortingOptions: _vm.columnSortOptions,
      sortSchema: _vm.sortSchema,
      filters: _vm.subsheet.filter,
      nonSortableColumns: _vm.nonSortableColumns
    },
    on: {
      filterByThisField: _vm.filterByThisField,
      updateSort: _vm.updateSortSchema,
      updateSpreadsheet: function updateSpreadsheet($event) {
        return _vm.updateSpreadsheet(_vm.subsheet.id);
      },
      removeExistingFilter: _vm.removeExistingFilter
    }
  }), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c("tbody", [_vm._l(_vm.table, function (record, index) {
    return _c("tr", {
      key: index,
      staticClass: "show-expand-icon-hover",
      class: ["height-".concat(_vm.rowHeight), record.selected ? "selected" : ""]
    }, [_c("td", [_c("div", {
      staticClass: "row-index",
      staticStyle: {
        width: "30px"
      }
    }, [_c("div", {
      staticClass: "flex items-center"
    }, [_c("span", {
      staticClass: "indexNo"
    }, [_vm._v("\n                  " + _vm._s(++index) + "\n                ")]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center justify-between"
    }, [_c("div", {
      staticClass: "checkbox items-center text-white",
      on: {
        click: function click($event) {
          return _vm.selectRow({
            keyId: record.key_id,
            selected: !record.selected
          });
        }
      }
    }, [_c("svg", {
      staticClass: "icon",
      staticStyle: {
        "shape-rendering": "geometricPrecision"
      },
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 12 12"
      }
    }, [_c("path", {
      attrs: {
        "fill-rule": "evenodd",
        fill: "currentColor",
        d: "M4.28873956,8.67773237 C4.68155785,9.06558677 5.32353851,9.05881767 5.7149082,8.67029224 L8.99219858,5.41681942 C9.38703148,5.02485595 9.39324696,4.39324696 9,4 L9,4 C8.60947571,3.60947571 7.98900805,3.60797445 7.59455526,4.0169601 L5.35239726,6.34172612 C5.15777363,6.54352029 4.85168871,6.5448785 4.66030753,6.33553882 L4.38384571,6.03313484 C4.01009312,5.62431068 3.39324696,5.60675304 3,6 L3,6 C2.60947571,6.39052429 2.61406454,7.02421959 3.00415366,7.40937929 L4.28873956,8.67773237 Z"
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "expand-icon",
      on: {
        click: function click($event) {
          return _vm.expandRecord(record);
        }
      }
    }, [_c("svg", {
      staticStyle: {
        "shape-rendering": "geometricprecision"
      },
      attrs: {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }
    }, [_c("path", {
      attrs: {
        "fill-rule": "evenodd",
        fill: "currentColor",
        d: "M5.77546101,13.6834543 L2.81474478,14.1064138 C2.25439084,14.1864644 1.87938524,13.8017775 1.95822565,13.2498947 L2.38118511,10.2891784 C2.45982823,9.73867658 2.83916177,9.616002 3.22968611,10.0065263 L3.93679297,10.7136331 L5.8350897,8.81533646 C6.22830529,8.42212085 6.85864277,8.42494825 7.24916702,8.8154725 C7.64241393,9.20871941 7.6397522,9.83910076 7.24930313,10.2295499 L5.35100654,12.1278466 L6.05811323,12.8349534 C6.45136014,13.2282004 6.32208977,13.6053645 5.77546101,13.6834543 Z M10.2981302,2.3810729 L13.2588464,1.95811344 C13.8192003,1.87806288 14.1942059,2.26274971 14.1153655,2.81463257 L13.6924061,5.7753488 C13.6137629,6.32585066 13.2344294,6.44852523 12.8439051,6.05800094 L12.1367982,5.35089416 L10.2294376,7.25825476 C9.836222,7.65147037 9.20588451,7.64864296 8.81536027,7.25811872 C8.42211336,6.86487181 8.42477509,6.23449046 8.81522416,5.84404133 L10.7225846,3.9366806 L10.0154779,3.22957382 C9.62223103,2.83632686 9.7515014,2.45916273 10.2981302,2.3810729 Z"
      }
    })])])])])])]), _vm._v(" "), _vm._l(_vm.columnFieldData, function (item, columnIndex) {
      return _c("td", {
        key: columnIndex,
        style: record[item.columnId].styleObject,
        attrs: {
          hidden: item.hidden,
          cellId: "".concat(record.key_id, "_").concat(item.columnId),
          customColumnId: "".concat(record.key_id, "_").concat(item.customColumnId),
          predefinedColumnId: "".concat(record.key_id, "_").concat(item.predefinedColumn)
        },
        on: {
          click: function click($event) {
            return _vm.handleColumnFocus({
              cellId: "".concat(record.key_id, "_").concat(item.columnId),
              data: record[item.columnId]
            });
          }
        }
      }, [["loadThirdPartyCarrierBol", "loadThirdPartyCarrierRateCon"].includes(item.predefinedColumn) ? _c("div", {
        staticClass: "cell-export",
        on: {
          click: function click($event) {
            return _vm.handleColumnFocus({
              cellId: "".concat(record.key_id, "_").concat(item.columnId),
              data: record[item.columnId]
            });
          }
        }
      }, [record[item.columnId].data ? _c("div", {
        staticClass: "flex items-center space-x-2"
      }, [record[item.columnId].data.url ? _c("div", {
        on: {
          click: function click($event) {
            $event.stopPropagation();
            return _vm.openAttachmentDoc(record[item.columnId].data.url);
          }
        }
      }, [_c("vx-tooltip", {
        staticClass: "mt-2",
        attrs: {
          text: item.predefinedColumn === "loadThirdPartyCarrierBol" ? "BOL" : "Rate Con"
        }
      }, [_c("vs-icon", {
        staticClass: "papper-clip-vertical",
        attrs: {
          size: "small",
          icon: "attachment"
        }
      })], 1)], 1) : _vm._e()]) : _vm._e()]) : ["number", "currency"].includes(item.customType) ? [_vm.selectedColumn && _vm.selectedColumn.cellId === "".concat(record.key_id, "_").concat(item.columnId) ? _c("input", {
        staticClass: "cells__input cell-export",
        class: [_vm.multilineRowHeight],
        style: record[item.columnId].styleObject,
        attrs: {
          readonly: _vm.isViewer || !item.readonly,
          type: "number"
        },
        domProps: {
          value: _vm.handleRecord(record[item.columnId].data, item.amount, item.predefinedColumn, item.customType)
        },
        on: {
          blur: function blur($event) {
            return _vm.updateCellValue($event, record, "".concat(record.key_id, "_").concat(item.columnId), item.customColumnId, " ".concat(record.key_id, "_").concat(item.customColumnId), item);
          },
          input: function input($event) {
            return _vm.handleCustomColumnInput($event, item.customType);
          }
        }
      }) : _c("div", {
        staticClass: "cells__input cell-export"
      }, [_vm._v("\n                " + _vm._s(item.customType === "currency" && record[item.columnId].data ? "$" : "") + "\n                " + _vm._s(_vm.handleRecord(record[item.columnId].data, item.amount, item.predefinedColumn, item.customType)) + "\n              ")])] : item.predefinedColumn === "loadStatus" ? _c("v-select", {
        staticClass: "custom-status-select cell-export",
        attrs: {
          value: record[item.columnId].data,
          options: _vm.loadStatuses,
          label: "label",
          closeOnSelect: true,
          id: record[item.columnId].data.loadId + "-status-" + record[item.columnId],
          disabled: _vm.isViewer
        },
        on: {
          input: function input($event) {
            return _vm.onLoadStatusChange($event, record, record[item.columnId]);
          }
        },
        scopedSlots: _vm._u([{
          key: "option",
          fn: function fn(option) {
            return [_c("span", {
              class: {
                "color-red": option.label === "Canceled"
              }
            }, [_vm._v("\n                      " + _vm._s(option.label) + "\n                    ")])];
          }
        }], null, true)
      }) : item.predefinedColumn !== "loadDriverHos" && item.predefinedColumn !== "loadFindCarriers" ? [item.predefinedColumn != "loadPod" ? _c("textarea", {
        staticClass: "cells__input cell-export",
        class: [_vm.multilineRowHeight],
        style: record[item.columnId].styleObject,
        attrs: {
          readonly: _vm.isViewer || !item.readonly && item.predefinedColumn != "loadDispatcherNotes",
          spellcheck: false
        },
        domProps: {
          value: _vm.handleRecord(record[item.columnId].data, item.amount, item.predefinedColumn)
        },
        on: {
          blur: function blur($event) {
            return _vm.updateCellValue($event, record, "".concat(record.key_id, "_").concat(item.columnId), item.customColumnId, " ".concat(record.key_id, "_").concat(item.customColumnId), item);
          }
        }
      }) : ((record[item.columnId] || {}).data || []).length ? _c("div", {
        staticClass: "cell-export",
        on: {
          click: function click($event) {
            return _vm.handleColumnFocus({
              cellId: "".concat(record.key_id, "_").concat(item.columnId),
              data: record[item.columnId]
            });
          }
        }
      }, [_c("div", {
        staticClass: "flex items-center space-x-2"
      }, _vm._l(record[item.columnId].data, function (item) {
        return _c("div", {
          key: item.loadImageId,
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.openPodAttchments(item);
            }
          }
        }, [_c("vx-tooltip", {
          staticClass: "mt-2",
          attrs: {
            text: "POD available"
          }
        }, [_c("vs-icon", {
          staticClass: "papper-clip-vertical",
          attrs: {
            size: "small",
            icon: "attachment"
          }
        })], 1)], 1);
      }), 0)]) : _c("div", {
        staticClass: "cell-export"
      })] : item.predefinedColumn === "loadFindCarriers" && record[item.columnId].data ? _c("div", [_c("div", {
        staticClass: "flex justify-center items-center"
      }, [_c("vs-button", {
        attrs: {
          color: "primary",
          type: "border",
          size: "small",
          disabled: true
        },
        on: {
          click: function click($event) {
            return _vm.toggleFindCarriersPanel($event, "overlayPanel-".concat(record.key_id, "_").concat(item.columnId), record.key_id);
          }
        }
      }, [_vm._v("\n                  Find Carriers\n                ")]), _vm._v(" "), _c("OverlayPanel", {
        ref: "overlayPanel-".concat(record.key_id, "_").concat(item.columnId),
        refInFor: true,
        staticStyle: {
          width: "500px",
          padding: "0"
        },
        attrs: {
          appendTo: "body",
          id: "multiUserSelectOverlay"
        }
      }, [_c("FindCarriersPanel", {
        attrs: {
          truckList: _vm.availableTrucks
        },
        on: {
          onClose: function onClose($event) {
            return _vm.closeOverlayPanel("overlayPanel-".concat(record.key_id, "_").concat(item.columnId));
          },
          onSelect: function onSelect($event) {
            return _vm.handleFindCarriersSelect($event, record.key_id, "overlayPanel-".concat(record.key_id, "_").concat(item.columnId));
          }
        }
      })], 1)], 1)]) : _c("div", [record[item.columnId].data && record[item.columnId].data.length ? _c("div", {
        staticClass: "flex"
      }, [_vm._l(record[item.columnId].data, function (item, index) {
        return [item.driverName !== undefined ? _c("div", {
          key: index,
          staticClass: "flex flex-wrap gap-1 justify-evenly"
        }, [_c("vs-tooltip", {
          staticClass: "flex flex-col items-center",
          attrs: {
            text: _vm.getHosTooltipContent(item.driverName, "Until break")
          }
        }, [_c("Knob", {
          style: _vm.knobStyleObject,
          attrs: {
            value: item.breakValue,
            valueTemplate: item.breakLabel,
            strokeWidth: _vm.hosKnobStrokeWidth,
            size: _vm.iconHeight,
            valueColor: item.breakValueColor,
            rangeColor: item.breakRangeColor,
            readonly: ""
          }
        }), _vm._v(" "), _vm.isHosLabelVisible ? _c("label", {
          staticClass: "text-xs"
        }, [_vm._v("\n                        Until break\n                      ")]) : _vm._e()], 1), _vm._v(" "), _c("vs-tooltip", {
          staticClass: "flex flex-col items-center",
          attrs: {
            text: _vm.getHosTooltipContent(item.driverName, "Drive")
          }
        }, [_c("Knob", {
          style: _vm.knobStyleObject,
          attrs: {
            value: item.driveValue,
            valueTemplate: item.driveLabel,
            strokeWidth: _vm.hosKnobStrokeWidth,
            size: _vm.iconHeight,
            valueColor: item.driveValueColor,
            rangeColor: item.driveRangeColor,
            readonly: ""
          }
        }), _vm._v(" "), _vm.isHosLabelVisible ? _c("label", {
          staticClass: "text-xs"
        }, [_vm._v("\n                        Drive\n                      ")]) : _vm._e()], 1), _vm._v(" "), _c("vs-tooltip", {
          staticClass: "flex flex-col items-center",
          attrs: {
            text: _vm.getHosTooltipContent(item.driverName, "Shift")
          }
        }, [_c("Knob", {
          style: _vm.knobStyleObject,
          attrs: {
            value: item.shiftValue,
            valueTemplate: item.shiftLabel,
            strokeWidth: _vm.hosKnobStrokeWidth,
            size: _vm.iconHeight,
            valueColor: item.shiftValueColor,
            rangeColor: item.shiftRangeColor,
            readonly: ""
          }
        }), _vm._v(" "), _vm.isHosLabelVisible ? _c("label", {
          staticClass: "text-xs"
        }, [_vm._v("\n                        Shift\n                      ")]) : _vm._e()], 1), _vm._v(" "), _c("vs-tooltip", {
          staticClass: "flex flex-col items-center",
          attrs: {
            text: _vm.getHosTooltipContent(item.driverName, "Cycle")
          }
        }, [_c("Knob", {
          style: _vm.knobStyleObject,
          attrs: {
            value: item.cycleValue,
            valueTemplate: item.cycleLabel,
            strokeWidth: _vm.hosKnobStrokeWidth,
            size: _vm.iconHeight,
            valueColor: item.cycleValueColor,
            rangeColor: item.cycleRangeColor,
            readonly: ""
          }
        }), _vm._v(" "), _vm.isHosLabelVisible ? _c("label", {
          staticClass: "text-xs"
        }, [_vm._v("\n                        Cycle\n                      ")]) : _vm._e()], 1)], 1) : _vm._e()];
      })], 2) : _vm._e()])], 2);
    })], 2);
  }), _vm._v(" "), _c("tr", [_c("td", {
    staticClass: "cursor-pointer",
    on: {
      click: _vm.addNewLoad
    }
  }, [_c("vs-icon", {
    staticClass: "pl-1",
    attrs: {
      icon: "add"
    }
  })], 1), _vm._v(" "), _vm._l(_vm.headers, function (record, index) {
    return _c("td", {
      key: index
    }, [_c("input", {
      staticClass: "cells__input",
      attrs: {
        readonly: true
      }
    })]);
  })], 2), _vm._v(" "), _c("tr", [_vm._m(0), _vm._v(" "), _vm._l(_vm.columnFieldData, function (item, columnIndex) {
    return _c("td", {
      key: columnIndex,
      attrs: {
        hidden: item.hidden
      }
    }, [_vm.numberTypeColumns.includes(item.predefinedColumn) || item.customType === "number" || item.customType === "currency" ? [_c("span", {
      staticClass: "flex cells__input cell-export"
    }, [_c("p", {
      staticClass: "mr-1"
    }, [_vm._v("Sum")]), _vm._v("\n                " + _vm._s(_vm.getFieldSum(item)) + "\n              ")])] : [_c("span", {
      staticClass: "cells__input"
    })]], 2);
  })], 2)], 2)], 2)]), _vm._v(" "), _c("load-sidebar", {
    attrs: {
      isSidebarActive: _vm.isSidebarActiveLocal,
      data: _vm.loadId
    },
    on: {
      closeSidebar: _vm.closeSidebar
    }
  }), _vm._v(" "), _c("vs-prompt", {
    staticClass: "custom-prompt",
    attrs: {
      "accept-text": "Yes",
      color: _vm.promptColor,
      title: "Payment Requested",
      active: _vm.paymentRequestPrompt.isActive
    },
    on: {
      cancel: _vm.resetPaymentRequestPrompt,
      accept: _vm.requestForPayment,
      close: _vm.resetPaymentRequestPrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.paymentRequestPrompt, "isActive", $event);
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.promptMessage))]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Email Subject :")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-4/5",
    attrs: {
      placeholder: "Email"
    },
    model: {
      value: _vm.emailSubject,
      callback: function callback($$v) {
        _vm.emailSubject = $$v;
      },
      expression: "emailSubject"
    }
  })], 1)]), _vm._v(" "), _c("vs-prompt", {
    staticClass: "invoice-generated-popup",
    attrs: {
      "accept-text": "Yes",
      title: "Generate Invoice",
      active: _vm.invoicePrompt.isActive
    },
    on: {
      cancel: _vm.resetInvoicePrompt,
      accept: function accept() {
        return _vm.generateInvoice(_vm.invoicePrompt.selectedLoad);
      },
      close: _vm.resetInvoicePrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.invoicePrompt, "isActive", $event);
      }
    }
  }, [_c("div", {
    staticClass: "flex column items-center"
  }, [_c("p", {
    staticClass: "mb-0 mr-3"
  }, [_vm._v("Are you sure you want to generate invoice?")])]), _vm._v(" "), !_vm.invoicePrompt.noFactoring && this.allFactoringCompanies && this.allFactoringCompanies.length > 0 ? _c("div", {
    staticClass: "w-full mt-3"
  }, [_c("div", {
    staticClass: "flex flex-row items-center justify-between"
  }, [_c("div", {
    staticClass: "w-full relative"
  }, [_c("vs-checkbox", {
    staticClass: "factoring-checkbox",
    model: {
      value: _vm.invoicePrompt.skipFactoring,
      callback: function callback($$v) {
        _vm.$set(_vm.invoicePrompt, "skipFactoring", $$v);
      },
      expression: "invoicePrompt.skipFactoring"
    }
  }, [_vm._v("\n            Skip Factoring\n          ")])], 1)])]) : _vm._e()]), _vm._v(" "), _c("vs-prompt", {
    staticClass: "payment-received-prompt",
    attrs: {
      "accept-text": "Yes",
      color: "primary",
      title: "Payment Received",
      active: _vm.paymentReceivedPrompt.isActive
    },
    on: {
      cancel: _vm.resetPaymentReceivedPrompt,
      accept: _vm.paymentReceived,
      close: _vm.resetPaymentReceivedPrompt,
      "update:active": function updateActive($event) {
        return _vm.$set(_vm.paymentReceivedPrompt, "isActive", $event);
      }
    }
  }, [_c("p", {
    staticClass: "mb-3"
  }, [_vm._v("\n      Are you sure you want to mark as payment received with the following\n      amount?\n    ")]), _vm._v(" "), _c("vx-input-group", [_c("template", {
    slot: "prepend"
  }, [_c("div", {
    staticClass: "prepend-text bg-primary"
  }, [_c("span", [_vm._v("$")])])]), _vm._v(" "), _c("vs-input", {
    attrs: {
      type: "number",
      placeholder: "Amount"
    },
    model: {
      value: _vm.receivedAmount,
      callback: function callback($$v) {
        _vm.receivedAmount = $$v;
      },
      expression: "receivedAmount"
    }
  })], 2)], 1), _vm._v(" "), _c("mass-invoice-popup", {
    attrs: {
      isPopupActive: _vm.isMassInvoicePopupActive
    },
    on: {
      onClose: function onClose($event) {
        _vm.isMassInvoicePopupActive = false;
      },
      onSubmit: _vm.submitMassInvoice
    }
  })], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("td", [_c("span", {
    staticClass: "cells__input"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=template&id=4bef910a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=template&id=4bef910a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "ez-color-picker"
  }, [_c("div", {
    staticClass: "trigger",
    on: {
      click: _vm.toggleDropDown
    }
  }, [!_vm.$slots.trigger ? _c("vs-icon", {
    attrs: {
      icon: "palette"
    }
  }) : _vm._t("trigger")], 2), _vm._v(" "), _vm.showDropDown ? _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.closeDropDown,
      expression: "closeDropDown"
    }],
    staticClass: "ez-color-picker-drop-down"
  }, [_c("div", {
    staticClass: "ez-color-picker-pallet"
  }, [_c("v-swatches", {
    attrs: {
      value: _vm.value,
      swatches: _vm.colorPallet,
      "max-height": 150,
      "spacing-size": 4,
      "row-length": 10,
      "swatch-size": "20",
      shapes: "circles",
      "show-border": "",
      "show-checkbox": "",
      "popover-x": "right",
      "popover-y": "bottom",
      inline: true
    },
    on: {
      input: _vm.emitInput
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "ez-color-picker-reset"
  }, [_c("vs-button", {
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.emitReset
    }
  }, [_vm._v("\n        Reset\n      ")])], 1)]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=template&id=5b53b487&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=template&id=5b53b487& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div");
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=template&id=98a4d054&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=template&id=98a4d054& ***!
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

  return _c("div", _vm._l(_vm.header, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex items-center my-5"
    }, [_c("div", {
      staticClass: "label-container"
    }, [_c("label", [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c("div", {
      staticClass: "cell-container"
    }, [_c("input", {
      staticClass: "w-full",
      attrs: {
        readonly: !item.editable
      },
      domProps: {
        value: _vm.columns.record[item.id]
      },
      on: {
        input: function input($event) {
          return _vm.onCellUpdate($event, _vm.columns.record.key_id, item.customColumnId);
        }
      }
    })])]);
  }), 0);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=template&id=0318e85a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=template&id=0318e85a&scoped=true& ***!
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

  return _c("thead", {
    ref: "dropdownParentNode"
  }, [_c("tr", [_c("th", {
    staticStyle: {
      width: "30px"
    }
  }), _vm._v(" "), _c("th", {
    attrs: {
      hidden: ""
    }
  }, [_vm._v("Id")]), _vm._v(" "), _vm._l(_vm.modifiedHeaders, function (items, index) {
    return _c("th", {
      key: index,
      staticClass: "table-header",
      style: {
        width: items.width
      },
      attrs: {
        id: items.id,
        sheetId: _vm.subsheetId,
        spreadsheetId: _vm.spreadsheetId,
        draggable: ""
      },
      on: {
        dragstart: function dragstart($event) {
          return _vm.dragStart(items);
        },
        dragenter: function dragenter($event) {
          $event.preventDefault();
        },
        dragover: function dragover($event) {
          $event.preventDefault();
        },
        drop: function drop($event) {
          return _vm.dropDown(items);
        }
      }
    }, [_c("div", {
      staticClass: "flex items-center justify-between w-full column-width"
    }, [_c("div", [_c("span", {
      staticClass: "table-heading truncate drag-cursor"
    }, [_vm._v(_vm._s(items.name))])]), _vm._v(" "), _vm.accessLevel < 3 ? _c("div", {
      staticClass: "header-dropdown"
    }, [_c("vs-dropdown", {
      ref: "filterDropdown_".concat(items.id),
      refInFor: true,
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      },
      on: {
        click: function click($event) {
          items.isFilterable ? _vm.initDropdownFilterOptions(items.filterColumnName) : {};
        }
      }
    }, [_c("div", {
      staticClass: "text-right"
    }, [_c("vs-icon", {
      attrs: {
        icon: "arrow_drop_down"
      }
    })], 1), _vm._v(" "), _c("vs-dropdown-menu", {
      staticClass: "dropdown-items"
    }, [_c("vs-dropdown-item", [_c("div", {
      staticClass: "cursor-pointer flex items-center dropdown-item-hover",
      on: {
        click: function click($event) {
          return _vm.openDeleteWarningDialog(items.id);
        }
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "delete"
      }
    }), _vm._v(" "), _c("p", {
      staticClass: "ml-1 text-sm"
    }, [_vm._v("Delete Column")])], 1)]), _vm._v(" "), items.isSortable ? _vm._l(_vm.sortingOptions, function (value, index) {
      return _c("vs-dropdown-item", {
        key: index
      }, [_c("div", {
        staticClass: "cursor-pointer flex items-center dropdown-item-hover",
        on: {
          click: function click($event) {
            return _vm.selectSortOption(value, items);
          }
        }
      }, [!!_vm.sortSchemaMap["".concat(items.predefinedColumn, "_").concat(value.value, "_").concat(items.id)] ? _c("vs-icon", {
        attrs: {
          size: "14px",
          icon: "check"
        }
      }) : _c("span", {
        staticStyle: {
          width: "21px"
        }
      }), _vm._v(" "), _c("p", {
        staticClass: "ml-1 text-sm"
      }, [_vm._v("Sort " + _vm._s(value.text))])], 1)]);
    }) : _vm._e(), _vm._v(" "), items.isFilterable ? [_c("vs-divider", {
      staticClass: "my-2"
    }), _vm._v(" "), _c("div", {
      staticClass: "flex justify-end"
    }, [_c("vs-button", {
      staticClass: "add-filter-btn",
      attrs: {
        color: "primary",
        type: "flat",
        size: "small",
        disabled: !_vm.filterConditions.cmp
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.addNewFilter(items.filterColumnName, "filterDropdown_".concat(items.id));
        }
      }
    }, [_vm._v("\n                    Save filter\n                  ")]), _vm._v(" "), _c("vs-button", {
      staticClass: "add-filter-btn ml-2",
      attrs: {
        color: "danger",
        type: "flat",
        size: "small",
        disabled: _vm.isClearBtnDisabled
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeExistingFilter(items.filterColumnName, "filterDropdown_".concat(items.id));
        }
      }
    }, [_vm._v("\n                    Clear\n                  ")])], 1), _vm._v(" "), _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("Dropdown", {
      staticClass: "w-full",
      attrs: {
        placeholder: "Condition",
        options: _vm.operators[items.filterColumnName]
      },
      scopedSlots: _vm._u([{
        key: "value",
        fn: function fn(slotProps) {
          return [slotProps.value ? _c("span", [_vm._v("\n                        " + _vm._s(_vm.sentenceCase(slotProps.value)) + "\n                      ")]) : _c("span", [_vm._v(_vm._s(slotProps.placeholder))])];
        }
      }, {
        key: "option",
        fn: function fn(slotProps) {
          return [_c("span", [_vm._v("\n                        " + _vm._s(_vm.sentenceCase(slotProps.option)) + "\n                      ")])];
        }
      }], null, true),
      model: {
        value: _vm.filterConditions.cmp,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "cmp", $$v);
        },
        expression: "filterConditions.cmp"
      }
    })], 1), _vm._v(" "), ["loadShipDate", "loadDeliveryDate"].includes(items.filterColumnName) ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("Dropdown", {
      staticClass: "w-full",
      attrs: {
        placeholder: "When",
        options: _vm.dateOptions,
        optionLabel: "text",
        optionValue: "value",
        disabled: !_vm.filterConditions.cmp
      },
      on: {
        input: function input(val) {
          val === "date" ? _vm.filterConditions.value = null : {};
        }
      },
      scopedSlots: _vm._u([{
        key: "value",
        fn: function fn(slotProps) {
          return [slotProps.value ? _c("span", [_vm._v("\n                        " + _vm._s(_vm.sentenceCase(slotProps.value)) + "\n                      ")]) : _c("span", [_vm._v(_vm._s(slotProps.placeholder))])];
        }
      }, {
        key: "option",
        fn: function fn(slotProps) {
          return [_c("span", [_vm._v("\n                        " + _vm._s(_vm.sentenceCase(slotProps.option.text)) + "\n                      ")])];
        }
      }], null, true),
      model: {
        value: _vm.filterConditions.dateType,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "dateType", $$v);
        },
        expression: "filterConditions.dateType"
      }
    })], 1) : _vm._e(), _vm._v(" "), ["loadShipDate", "loadDeliveryDate"].includes(items.filterColumnName) && _vm.filterConditions.dateType === "date" ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("flat-pickr", {
      staticClass: "custom-select",
      attrs: {
        placeholder: "Select date"
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), ["loadDriver", "loadDispatcher", "loadTag"].includes(items.filterColumnName) ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [items.filterColumnName == "loadDriver" ? _c("custom-multiSelect", {
      style: {
        width: "170px"
      },
      attrs: {
        options: _vm.driverOptions,
        dataKey: "uniqueId",
        disabled: !_vm.filterConditions.cmp,
        optionLabel: "fullName",
        optionValue: "id"
      },
      on: {
        input: function input($event) {
          _vm.filterConditions.value = $event;
        }
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    }) : _vm._e(), _vm._v(" "), items.filterColumnName == "loadDispatcher" ? _c("custom-multiSelect", {
      style: {
        width: "170px"
      },
      attrs: {
        options: _vm.dispatcherOptions,
        disabled: !_vm.filterConditions.cmp,
        optionLabel: "fullName",
        optionValue: "id"
      },
      on: {
        input: function input($event) {
          _vm.filterConditions.value = $event;
        }
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    }) : _vm._e(), _vm._v(" "), items.filterColumnName == "loadTag" ? _c("custom-multiSelect", {
      style: {
        width: "170px"
      },
      attrs: {
        options: _vm.tagOptions,
        disabled: !_vm.filterConditions.cmp,
        optionLabel: "fullName",
        optionValue: "id"
      },
      on: {
        input: function input($event) {
          _vm.filterConditions.value = $event;
        }
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ["loadShipper", "loadReceiver"].includes(items.filterColumnName) ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("vs-input", {
      staticClass: "w-full",
      attrs: {
        disabled: !_vm.filterConditions.cmp,
        type: "filled",
        color: "primary"
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), items.filterColumnName === "loadCustomer" ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("custom-multiSelect", {
      style: {
        width: "170px"
      },
      attrs: {
        options: _vm.customerOptions,
        disabled: !_vm.filterConditions.cmp,
        optionLabel: "company_name",
        optionValue: "customer_id"
      },
      on: {
        input: function input($event) {
          _vm.filterConditions.value = $event;
        }
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), items.filterColumnName === "loadThirdPartyCarrier" && _vm.filterConditions.cmp === "isAnyOf" ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("custom-multiSelect", {
      style: {
        width: "170px"
      },
      attrs: {
        options: _vm.thirdPartyCarrierOptions,
        disabled: !_vm.filterConditions.cmp,
        optionLabel: "company_name",
        optionValue: "customer_id"
      },
      on: {
        input: function input($event) {
          _vm.filterConditions.value = $event;
        }
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), items.filterColumnName === "loadStatus" ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("custom-multiSelect", {
      style: {
        width: "170px"
      },
      attrs: {
        options: _vm.loadStatuses,
        disabled: !_vm.filterConditions.cmp
      },
      on: {
        input: function input($event) {
          _vm.filterConditions.value = $event;
        }
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), items.filterColumnName === "loadContainerStatus" ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("Dropdown", {
      staticClass: "w-full",
      attrs: {
        placeholder: "",
        options: _vm.loadContainerStatuses,
        optionLabel: "label",
        optionValue: "value",
        disabled: !_vm.filterConditions.cmp
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), items.filterColumnName === "loadContainerLocation" ? _c("div", {
      staticClass: "cursor-pointer flex items-center mt-2"
    }, [_c("custom-multiSelect", {
      style: {
        width: "170px"
      },
      attrs: {
        options: _vm.loadContainerLocation,
        disabled: !_vm.filterConditions.cmp,
        optionLabel: "label",
        optionValue: "value"
      },
      on: {
        input: function input($event) {
          _vm.filterConditions.value = $event;
        }
      },
      model: {
        value: _vm.filterConditions.value,
        callback: function callback($$v) {
          _vm.$set(_vm.filterConditions, "value", $$v);
        },
        expression: "filterConditions.value"
      }
    })], 1) : _vm._e()] : _vm._e()], 2)], 1)], 1) : _vm._e()])]);
  }), _vm._v(" "), _vm.accessLevel < 3 ? _c("th", {
    staticClass: "cursor-pointer",
    staticStyle: {
      width: "50px"
    }
  }, [_c("div", {
    on: {
      click: _vm.getCreatedCustomColumns
    }
  }, [_c("vs-dropdown", {
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("div", {
    staticClass: "a-icon text-black"
  }, [_c("span", [_c("vs-icon", {
    attrs: {
      icon: "add"
    }
  })], 1)]), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
    staticClass: "add-container"
  }, [_c("div", [_c("div", {
    staticClass: "fields-container"
  }, [_c("div", {
    staticClass: "p-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchInput,
      expression: "searchInput"
    }],
    staticClass: "px-3",
    attrs: {
      type: "text",
      placeholder: "Find a field"
    },
    domProps: {
      value: _vm.searchInput
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchInput = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "list-scrollbar"
  }, [_c("div", {
    staticClass: "p-5"
  }, [_vm._l(_vm.predefinedAndCreatedColumns, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "flex items-center item-hover p-2",
      class: [item.preDefined && _vm.predefinedColumns.includes(item.key) || !item.preDefined && _vm.existingCustomColumnId.includes(item.columnId) ? "column-active" : ""],
      on: {
        click: function click($event) {
          return _vm.handleActiveColumn(item.preDefined ? item.key : item.columnId, item.preDefined ? "predefinedColumn" : "createdCustomColumns");
        }
      }
    }, [item.preDefined && item.name === "Bill To Code" ? [_c("div", {
      staticClass: "ml-2"
    }, [_vm._v("\n                            " + _vm._s(_vm.showBillToCodeAsJobCode ? "Job #" : item.name) + "\n                          ")])] : _c("div", {
      staticClass: "ml-2"
    }, [_vm._v("\n                          " + _vm._s(item.name) + "\n                        ")])], 2);
  }), _vm._v(" "), _vm._l(_vm.customColumns, function (value, key, index) {
    return _c("div", {
      key: "".concat(value, "_").concat(index),
      staticClass: "flex items-center item-hover p-2",
      class: [_vm.activeColumn.includes(key) ? "column-active" : ""],
      on: {
        click: function click($event) {
          return _vm.handleActiveColumn(key, "customColumn");
        }
      }
    }, [_c("div", {
      staticClass: "ml-2"
    }, [_vm._v(_vm._s(key))])]);
  })], 2)])])]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full stoke-shadow mt-5",
    attrs: {
      placeholder: "Custom column name",
      disabled: _vm.disableCustomColumnNameInput
    },
    model: {
      value: _vm.customFieldName,
      callback: function callback($$v) {
        _vm.customFieldName = $$v;
      },
      expression: "customFieldName"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex justify-between items-center mt-5"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      disabled: _vm.validateSeletedColumn
    },
    on: {
      click: _vm.handleCreateField
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.closeDropdown
    }
  }, [_vm._v("Cancel")])], 1)], 1)])], 1)], 1)]) : _vm._e()], 2)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "filter-dropdown"
  }, [_c("div", [_c("div", {
    staticClass: "flex items-center cursor-pointer",
    on: {
      click: _vm.openFilterPopup
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "filter_list"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Filter")])], 1)]), _vm._v(" "), _vm.openFilterDropdown ? _c("div", {
    staticClass: "filter-dropdown-menu"
  }, [_c("div", {
    staticClass: "p-4 filters"
  }, [_vm.isFilterNotEmpty ? _c("div", {
    staticClass: "overflow-auto",
    staticStyle: {
      "max-height": "300px"
    }
  }, [_c("p", {
    staticClass: "p-2"
  }, [_vm._v("In this sheet, show records")]), _vm._v(" "), _vm._l(_vm.filtersData.conditions, function (condition, index) {
    return _c("span", {
      key: index
    }, [_c("div", {
      staticClass: "flex items-center p-3"
    }, [!index ? _c("span", {
      staticStyle: {
        "min-width": "82px"
      }
    }, [_c("p", {
      staticClass: "text-center"
    }, [_vm._v("Where")])]) : index == 1 ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.filtersData.op,
        expression: "filtersData.op"
      }],
      staticClass: "custom-select operator-select",
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.filtersData, "op", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.filterCondition, function (item) {
      return _c("option", {
        key: item,
        domProps: {
          value: item
        }
      }, [_vm._v("\n                  " + _vm._s(item) + "\n                ")]);
    }), 0) : _c("span", {
      staticStyle: {
        "min-width": "82px"
      }
    }, [_c("p", {
      staticClass: "text-center font-bold"
    }, [_vm._v(_vm._s(_vm.filtersData.op))])]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.column,
        expression: "condition.column"
      }],
      staticClass: "custom-select",
      staticStyle: {
        "min-width": "160px"
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(condition, "column", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleFun(condition.column, index);
        }]
      }
    }, _vm._l(_vm.filterableColumns, function (item) {
      return _c("option", {
        key: item.value,
        domProps: {
          value: item.value
        }
      }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                  ")]);
    }), 0), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.cmp,
        expression: "condition.cmp"
      }],
      staticClass: "custom-select",
      attrs: {
        placeholder: "operator"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(condition, "cmp", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.operators[condition.column], function (item, index) {
      return _c("option", {
        key: item,
        domProps: {
          value: item,
          selected: index == 0
        }
      }, [_vm._v("\n                    " + _vm._s((item || "").replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()) + "\n                  ")]);
    }), 0), _vm._v(" "), ["loadShipDate", "loadDeliveryDate"].includes(condition.column) ? _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selectedDateOption[index],
        expression: "selectedDateOption[index]"
      }],
      staticClass: "custom-select",
      attrs: {
        disabled: !condition.column
      },
      on: {
        change: [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(_vm.selectedDateOption, index, $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleDateOption($event, index);
        }]
      }
    }, _vm._l(_vm.dateOptions, function (item) {
      return _c("option", {
        key: item.value,
        domProps: {
          value: item.value
        }
      }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                  ")]);
    }), 0) : _vm._e()]), _vm._v(" "), ["loadShipDate", "loadDeliveryDate"].includes(condition.column) && _vm.selectedDateOption[index] != "today" ? _c("div", [_c("flat-pickr", {
      staticClass: "custom-select",
      attrs: {
        placeholder: "Select date"
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), condition.column == "loadDirection" ? _c("div", {
      staticClass: "w-full"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.value,
        expression: "condition.value"
      }],
      staticClass: "custom-select",
      attrs: {
        disabled: !condition.column,
        placeholder: "Select direction"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(condition, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.direction, function (item) {
      return _c("option", {
        key: item.value,
        domProps: {
          value: item.value
        }
      }, [_vm._v("\n                    " + _vm._s(item.text) + "\n                  ")]);
    }), 0)]) : _vm._e(), _vm._v(" "), ["loadDriver", "loadDispatcher", "loadTag", "loadTruck", "loadTrailer"].includes(condition.column) ? _c("div", {
      staticClass: "w-full"
    }, [condition.column == "loadDriver" ? _c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.driverOptions,
        label: "fullName",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select driver(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadTruck" ? _c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.truckOptions,
        label: "number",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select Truck(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadTrailer" ? _c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.trailerOptions,
        label: "number",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select Trailer(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadDispatcher" ? _c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.dispatcherOptions,
        label: "fullName",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select dispatcher(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadTag" ? _c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.tagOptions,
        label: "fullName",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select tag(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ["loadShipper", "loadReceiver", "loadLeg"].includes(condition.column) ? _c("div", {
      staticClass: "w-full"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.value,
        expression: "condition.value"
      }],
      staticClass: "custom-input",
      attrs: {
        disabled: !condition.column,
        placeholder: "Type filter keyword"
      },
      domProps: {
        value: condition.value
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;

          _vm.$set(condition, "value", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), condition.column == "loadPickupState" ? _c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.statesOptions,
        label: "text",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select Pickup State(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.text;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadDeliveryState" ? _c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.statesOptions,
        label: "text",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select Delivery State(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.text;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    }) : _vm._e(), _vm._v(" "), condition.column == "loadCustomer" ? _c("div", {
      staticClass: "w-full"
    }, [_c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.customerOptions,
        label: "company_name",
        value: "customer_id",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select customer(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.customer_id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), condition.column == "loadThirdPartyCarrier" && condition.cmp == "isAnyOf" ? _c("div", {
      staticClass: "w-full"
    }, [_c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.thirdPartyCarrierOptions,
        label: "company_name",
        value: "customer_id",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select carrier(s)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.customer_id;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), condition.column == "loadStatus" ? _c("div", {
      staticClass: "w-full"
    }, [_c("v-select", {
      attrs: {
        options: _vm.loadStatuses,
        label: "label",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select status(es)",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.value;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), condition.column == "loadContainerStatus" ? _c("div", {
      staticClass: "w-full"
    }, [_c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: condition.value,
        expression: "condition.value"
      }],
      staticClass: "custom-select",
      attrs: {
        disabled: !condition.column,
        placeholder: "Select status"
      },
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });

          _vm.$set(condition, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }
      }
    }, _vm._l(_vm.loadContainerStatuses, function (item) {
      return _c("option", {
        key: item.value,
        domProps: {
          value: item.value
        }
      }, [_vm._v("\n                    " + _vm._s(item.label) + "\n                  ")]);
    }), 0)]) : _vm._e(), _vm._v(" "), condition.column == "loadContainerLocation" ? _c("div", {
      staticClass: "w-full"
    }, [_c("v-select", {
      staticStyle: {
        "min-width": "200px"
      },
      attrs: {
        options: _vm.loadContainerLocation,
        label: "label",
        disabled: !condition.column,
        multiple: "",
        placeholder: "Select location",
        closeOnSelect: false,
        appendToBody: true,
        clearable: true,
        reduce: function reduce(option) {
          return option.value;
        }
      },
      model: {
        value: condition.value,
        callback: function callback($$v) {
          _vm.$set(condition, "value", $$v);
        },
        expression: "condition.value"
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "delete-icon",
      on: {
        click: function click($event) {
          return _vm.deleteCondition(index);
        }
      }
    }, [_c("vs-icon", {
      staticClass: "m-0",
      attrs: {
        icon: "delete"
      }
    })], 1)], 1)]);
  })], 2) : _c("span", [_vm._v("No filter conditions are applied to this sheet")]), _vm._v(" "), _c("div", {
    staticClass: "add-condition mt-4"
  }, [_c("span", {
    on: {
      click: _vm.handleAddCondition
    }
  }, [_vm._v("+ Add condition")])]), _vm._v(" "), _c("div", {
    staticClass: "flex items-center mt-5 justify-between"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.submitFilter
    }
  }, [_vm._v("Save")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "danger",
      type: "border"
    },
    on: {
      click: _vm.closeFilterPopup
    }
  }, [_vm._v("Cancel")])], 1)])]) : _vm._e()])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true& ***!
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
    staticClass: "sort"
  }, [_c("div", {
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleSortDropDown.apply(null, arguments);
      }
    }
  }, [!_vm.sortingSchemaRawPayload.length ? _c("div", {
    staticClass: "flex items-center cursor-pointer"
  }, [_c("vs-icon", {
    attrs: {
      icon: "swap_vert"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Sort")])], 1) : _c("div", {
    staticClass: "flex items-center cursor-pointer sorted-container"
  }, [_c("vs-icon", {
    attrs: {
      icon: "swap_vert"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Sorted by " + _vm._s(_vm.sortingSchemaRawPayload.length) + " fields")])], 1)]), _vm._v(" "), _vm.dropdown ? _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.closeSortDropDown,
      expression: "closeSortDropDown"
    }],
    staticClass: "sort-dropdown"
  }, [_c("div", {
    staticClass: "p-3 sort-content"
  }, [_c("span", [_vm._v("Sort by")]), _vm._v(" "), _c("vs-divider", {
    staticClass: "m-2"
  }), _vm._v(" "), !_vm.isSortExists ? [(_vm.columnsOptions || []).length ? [_c("div", {
    staticClass: "spreadsheet-add-new-sort-menu"
  }, _vm._l(_vm.columnsOptions, function (column, index) {
    return _c("div", {
      key: index,
      staticClass: "columns-list",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.handleAddColumnSort(column);
        }
      }
    }, [_c("span", [_vm._v(_vm._s(column.name))])]);
  }), 0)] : _c("section", [_c("p", {
    staticClass: "flex justify-center align-center text-info"
  }, [_vm._v("\n              Add few columns to the sheet to start sorting\n            ")])])] : [_c("draggable", {
    staticClass: "draggable-list-group",
    attrs: {
      tag: "ul",
      list: _vm.sortingSchemaRawPayload,
      handle: ".drag-handle"
    },
    on: {
      change: _vm.updateSortSchemaPayload
    }
  }, _vm._l(_vm.sortingSchemaRawPayload, function (item, i) {
    return _c("li", {
      key: i,
      staticClass: "draggable-list-group-item flex"
    }, [_c("div", {
      key: i,
      staticClass: "flex items-center mt-2"
    }, [_c("multiselect", {
      staticClass: "w-select",
      attrs: {
        "show-labels": false,
        "track-by": "name",
        label: "name",
        options: _vm.columnsOptions,
        "allow-empty": false,
        preselectFirst: true
      },
      on: {
        close: function close($event) {
          return _vm.updateSortSchemaPayload();
        }
      },
      model: {
        value: item.column,
        callback: function callback($$v) {
          _vm.$set(item, "column", $$v);
        },
        expression: "item.column"
      }
    }), _vm._v(" "), _c("multiselect", {
      staticClass: "mx-2 w-select",
      attrs: {
        "show-labels": false,
        "track-by": "value",
        label: "text",
        options: _vm.sortingOptions,
        "allow-empty": false,
        preselectFirst: true
      },
      on: {
        close: function close($event) {
          return _vm.updateSortSchemaPayload();
        }
      },
      model: {
        value: item.sorting,
        callback: function callback($$v) {
          _vm.$set(item, "sorting", $$v);
        },
        expression: "item.sorting"
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "cursor-pointer",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.removeSort(i);
        }
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "close"
      }
    })], 1)], 1), _vm._v(" "), _c("vs-icon", {
      staticClass: "drag-handle",
      attrs: {
        size: "small",
        icon: "drag_indicator"
      }
    })], 1);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "my-2"
  }, [_c("vs-dropdown", {
    attrs: {
      "vs-custom-content": "",
      "vs-trigger-click": ""
    }
  }, [_c("span", [_vm._v("+ Add another sort")]), _vm._v(" "), _c("vs-dropdown-menu", {
    ref: "addAnotherSortDropdown"
  }, [_c("div", {
    staticClass: "spreadsheet-add-new-sort-menu"
  }, _vm._l(_vm.columnsOptions, function (column, index) {
    return _c("div", {
      key: index,
      staticClass: "columns-list p-2 cursor-pointer",
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.handleAddColumnSort(column);
        }
      }
    }, [_c("span", [_vm._v(_vm._s(column.name))])]);
  }), 0)])], 1)], 1)]], 2)]) : _vm._e()])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=template&id=dee30ba2&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=template&id=dee30ba2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    ref: "spreadsheet"
  }, [_vm.selectedSheetId ? [_c("div", {
    staticClass: "flex items-center gap-2 float-right"
  }, [_c("span", [_vm._v("View Mode:")]), _vm._v(" "), _c("v-select", {
    staticClass: "mb-1",
    staticStyle: {
      "min-width": "100px"
    },
    attrs: {
      options: _vm.spreadsheetViewOptions,
      clearable: false,
      searchable: false,
      reduce: function reduce(option) {
        return option.value;
      }
    },
    on: {
      input: _vm.viewChange
    },
    model: {
      value: _vm.viewMode,
      callback: function callback($$v) {
        _vm.viewMode = $$v;
      },
      expression: "viewMode"
    }
  })], 1), _vm._v(" "), _vm._l(_vm.spreadsheet.sheets, function (subsheet, index) {
    return _c("spreadsheet-editor", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isSubsheetVisible(subsheet.id),
        expression: "isSubsheetVisible(subsheet.id)"
      }],
      key: index,
      ref: "spreadsheetEditor",
      refInFor: true,
      attrs: {
        subsheet: subsheet,
        headers: subsheet.columns,
        spreadsheetId: _vm.spreadsheet.id,
        accessLevel: _vm.accessLevel,
        viewMode: _vm.viewMode
      },
      on: {
        update: _vm.onCellUpdate,
        updateSpreadsheet: _vm.getSpreadsheetData,
        updateSameLoadData: _vm.updateSameLoadData,
        updateSpreadsheetName: _vm.updateSpreadsheetNameLocally
      },
      model: {
        value: subsheet.content,
        callback: function callback($$v) {
          _vm.$set(subsheet, "content", $$v);
        },
        expression: "subsheet.content"
      }
    }, _vm._l(subsheet.columns, function (column) {
      return _c("columns", {
        key: column.id,
        attrs: {
          field: column.id,
          predefinedColumn: column.predefinedColumn,
          readonly: column.editable,
          customColumnId: column.customColumnId,
          order: column.order,
          amount: _vm.amountCols.includes(column.predefinedColumn) || column.customType === "currency",
          customType: column.customType
        }
      });
    }), 1);
  }), _vm._v(" "), _vm.viewMode === "list" && _vm.accessLevel && _vm.accessLevel < 3 ? [_c("vs-button", {
    staticClass: "mt-5",
    staticStyle: {
      width: "160px"
    },
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: _vm.addNewSubsheet
    }
  }, [_vm._v("\n        Add New Subsheet\n      ")])] : _c("div", [_c("div", {
    staticClass: "fixed bottom-0 w-full bg-white pb-4 flex gap-3 items-center"
  }, [_c("div", {
    ref: "subsheetList",
    staticClass: "flex gap-3 overflow-x-auto subsheet-list view-bar-container pr-2",
    style: _vm.subsheetListStyle
  }, [_c("div", {
    staticClass: "flex"
  }, _vm._l(_vm.spreadsheet.sheets, function (subsheet, index) {
    return _c("div", {
      key: index,
      staticClass: "view-bar-item",
      attrs: {
        id: "subsheet-".concat(subsheet.id)
      }
    }, [_c("div", {
      staticClass: "flex items-center justify-center",
      class: {
        "active-spreadsheet": subsheet.id == _vm.selectedSubsheetId
      }
    }, [_vm.modifySheetId == subsheet.id ? _c("div", {
      staticClass: "flex items-center"
    }, [_c("input", {
      staticClass: "spreadsheet-rename-input",
      domProps: {
        value: subsheet.name
      },
      on: {
        keyup: function keyup($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.modifySubsheetName($event.target.value, subsheet.id);
        }
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "cursor-pointer",
      staticStyle: {
        position: "relative",
        right: "20px",
        display: "flex"
      },
      on: {
        click: function click($event) {
          _vm.modifySheetId = "";
        }
      }
    }, [_c("vs-icon", {
      attrs: {
        icon: "close"
      }
    })], 1)]) : _c("span", {
      staticClass: "cursor-pointer"
    }, [_c("div", {
      staticClass: "flex items-center"
    }, [_c("span", {
      staticClass: "mr-2",
      on: {
        click: function click($event) {
          return _vm.updateSelectedSubsheetId(subsheet.id);
        }
      }
    }, [_vm._v("\n                      " + _vm._s(subsheet.name) + "\n                    ")]), _vm._v(" "), _c("div", {
      staticClass: "show-hover"
    }, [_c("span", {
      on: {
        click: function click($event) {
          return _vm.toggleOverlayPanel($event, "overlayPanel-".concat(subsheet.id));
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
        d: "M7 10l5 5 5-5z"
      }
    })])]), _vm._v(" "), _c("OverlayPanel", {
      ref: "overlayPanel-".concat(subsheet.id),
      refInFor: true,
      staticClass: "overlay-panel",
      staticStyle: {
        width: "160px",
        padding: "0"
      },
      attrs: {
        appendTo: "body"
      }
    }, [_c("div", {
      staticClass: "cursor-pointer pb-1"
    }, [_c("p", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.handleRename(subsheet.id);
        }
      }
    }, [_vm._v("\n                            Rename Subsheet\n                          ")])]), _vm._v(" "), _c("div", {
      staticClass: "cursor-pointer pt-1 text-danger"
    }, [_c("p", {
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.openDeleteWarningDialog(subsheet.id);
        }
      }
    }, [_vm._v("\n                            Delete Subsheet\n                          ")])])])], 1)])])])]);
  }), 0)]), _vm._v(" "), _vm.accessLevel && _vm.accessLevel < 3 ? [_c("vs-button", {
    staticStyle: {
      width: "160px"
    },
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: _vm.addNewSubsheet
    }
  }, [_vm._v("\n            Add New Subsheet\n          ")])] : _vm._e()], 2)])] : _c("section", [_vm._m(0)])], 2);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "flex justify-center align-center p-10"
  }, [_c("h2", [_vm._v("No sheets available")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-expand-icon-hover {\n  transition: all 350ms;\n}\n.show-expand-icon-hover td:first-child {\n  position: relative;\n  min-width: 30px;\n}\n.expand-icon {\n  display: none;\n}\n[dir] .expand-icon {\n  cursor: pointer;\n}\n[dir=ltr] .expand-icon {\n  margin-left: 4px;\n}\n[dir=rtl] .expand-icon {\n  margin-right: 4px;\n}\n.show-expand-icon-hover:hover .expand-icon {\n  display: flex;\n}\n.spreadsheet-table {\n  width: -moz-max-content;\n  width: max-content;\n}\n[dir] .spreadsheet-table thead {\n  background: #f5f5f5;\n}\n.spreadsheet-table thead tr th {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n  -moz-text-overflow: ellipsis;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n[dir] .spreadsheet-table thead tr th {\n  padding: 9px 13px;\n}\n[dir] .spreadsheet-table tbody {\n  background: #fff;\n}\n[dir] .spreadsheet-table tbody tr td {\n  padding: 7px;\n}\n[dir] .spreadsheet-table th, [dir] .spreadsheet-table td {\n  padding: 4px;\n  border-bottom: 1px solid #ddd;\n}\n[dir=ltr] .spreadsheet-table th, [dir=ltr] .spreadsheet-table td {\n  text-align: left;\n}\n[dir=rtl] .spreadsheet-table th, [dir=rtl] .spreadsheet-table td {\n  text-align: right;\n}\n.spreadsheet-table {\n  border-collapse: collapse;\n}\n[dir] .spreadsheet-table {\n  border: 1px solid hsl(202deg, 10%, 88%);\n}\n[dir] .spreadsheet-table thead tr th {\n  background: #f5f5f5;\n  border-bottom: 1px solid hsl(0deg, 0%, 82%);\n}\n[dir=ltr] .spreadsheet-table thead tr th {\n  border-left: 1px solid hsl(202deg, 10%, 88%);\n}\n[dir=rtl] .spreadsheet-table thead tr th {\n  border-right: 1px solid hsl(202deg, 10%, 88%);\n}\n.spreadsheet-table thead tr th .table-heading {\n  font-weight: 500;\n  color: hsl(0deg, 0%, 10%);\n  font-size: 12px;\n}\n.spreadsheet-table th,\n.spreadsheet-table td {\n  border-collapse: collapse;\n}\n[dir] .spreadsheet-table th, [dir] .spreadsheet-table td {\n  border: 1px solid hsl(202deg, 10%, 88%);\n}\n.cells__input {\n  width: 100%;\n  overflow: hidden;\n  font-family: Arial, Montserrat, Helvetica, sans-serif;\n  resize: none;\n}\n[dir] .cells__input {\n  border: none;\n  padding: 0px 6px;\n}\n[dir] .cells input, [dir] .cells button {\n  border: none;\n  background: #fff;\n  padding: 0 6px;\n}\n.cell-focus {\n  outline: #2d7ff9 auto 1px !important;\n}\n.papper-clip-vertical {\n  color: rgb(132, 132, 132);\n}\n[dir] .papper-clip-vertical {\n  cursor: pointer;\n}\n[dir=ltr] .papper-clip-vertical {\n  margin-right: -5px;\n  transform: rotate(270deg);\n}\n[dir=rtl] .papper-clip-vertical {\n  margin-left: -5px;\n  transform: rotate(-270deg);\n}\n.sheet-name {\n  font-size: 16px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n[dir] .sheet-name {\n  margin-top: 1.25rem !important;\n  cursor: pointer;\n}\n[dir=ltr] .sheet-name {\n  padding-right: 30px;\n}\n[dir=rtl] .sheet-name {\n  padding-left: 30px;\n}\n[dir] .subsheet-rename-input {\n  border: 1px solid #ccc;\n  padding: 5px;\n  border-radius: 3px;\n}\n.show-on-hover {\n  display: none;\n}\n.sheet-name-hover:hover .show-on-hover {\n  display: block;\n}\n.height-short {\n  height: 17px;\n  line-height: 1.2;\n  transition: height 350ms;\n}\n.height-medium {\n  height: 39px;\n  line-height: 1.4;\n  transition: height 350ms;\n}\n.height-tall {\n  height: 72px;\n  line-height: 1.4;\n  transition: height 350ms;\n}\n.line-clamp {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  position: relative;\n}\n.line-clamp-short {\n  -webkit-line-clamp: 1;\n}\n.line-clamp-medium {\n  -webkit-line-clamp: 2;\n}\n.line-clamp-tall {\n  -webkit-line-clamp: 4;\n}\n.text-row-height {\n  font-family: Montserrat, Arial, Helvetica, sans-serif;\n}\n.height-screen {\n  height: calc(100vh - 200px);\n}\n.spreadsheet-editor .table-tools .formatter-block {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.spreadsheet-editor .table-tools .formatter-block .formatter-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 25px;\n  width: 25px;\n}\n[dir] .spreadsheet-editor .table-tools .formatter-block .formatter-icon {\n  cursor: pointer;\n  padding: 1px;\n}\n[dir] .spreadsheet-editor .table-tools .formatter-block .formatter-icon:hover {\n  background-color: #e1ffee;\n}\n.spreadsheet-editor tr .row-index .checkbox {\n  width: 15px;\n  height: 15px;\n  display: none;\n}\n[dir] .spreadsheet-editor tr .row-index .checkbox {\n  border-radius: 2px;\n  background: #ffffff;\n  border: 1px solid #95a0a6;\n}\n.spreadsheet-editor tr:hover .row-index .checkbox {\n  display: flex;\n}\n.spreadsheet-editor tr:hover .row-index .indexNo {\n  display: none;\n}\n[dir] .spreadsheet-editor tr.selected {\n  background: #f0f7ff;\n  box-shadow: #f0f7ff 0px 2px 2px 0px;\n}\n[dir] .spreadsheet-editor tr.selected textarea, [dir] .spreadsheet-editor tr.selected td {\n  background: #f0f7ff;\n}\n.spreadsheet-editor tr.selected .row-index .checkbox {\n  display: flex;\n}\n[dir] .spreadsheet-editor tr.selected .row-index .checkbox {\n  background-color: #2d7ff9;\n  border-color: transparent;\n}\n.spreadsheet-editor tr.selected .row-index .indexNo {\n  display: none;\n}\n.deleteButton {\n  color: red;\n}\n[dir] .deleteButton {\n  cursor: pointer;\n}\n.color-red {\n  color: #ff474c;\n}\n.custom-status-select .feather-icon {\n  display: none !important;\n}\n.custom-status-select .vs__dropdown-toggle {\n  align-items: baseline;\n}\n[dir] .custom-status-select .vs__dropdown-toggle {\n  border: none;\n  background-color: unset;\n}\n.custom-status-select .vs__selected-options {\n  height: 17px;\n}\n.custom-status-select .vs__search {\n  height: 17px;\n  max-width: 1px;\n}\n[dir] .custom-status-select .vs__search {\n  background-color: unset;\n}\n.custom-status-select .vs__selected {\n  height: 17px;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  min-width: 0px;\n  max-width: 100%;\n  font-size: 14px !important;\n  font-family: Arial, Montserrat, Helvetica, sans-serif;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[dir] .custom-status-select .vs__selected {\n  border-radius: 10px;\n  margin: 0px;\n}\n[dir=ltr] .custom-status-select .vs__selected {\n  padding-left: 7px;\n}\n[dir=rtl] .custom-status-select .vs__selected {\n  padding-right: 7px;\n}\n.custom-status-select .vs__dropdown-option--highlight span {\n  color: white;\n}\n.custom-prompt .vs-dialog {\n  max-width: 700px;\n}\n.invoice-generated-popup .vs-dialog {\n  transition: all 0.2s;\n  z-index: 100;\n  width: calc(100% - 20px);\n  max-width: 400px;\n}\n[dir] .invoice-generated-popup .vs-dialog {\n  margin: 10px;\n  border-radius: 6px;\n  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n[dir=ltr] .invoice-generated-popup .vs-dialog {\n  animation: rebound 0.3s;\n}\n[dir=rtl] .invoice-generated-popup .vs-dialog {\n  animation: rebound 0.3s;\n}\n.payment-received-prompt .vs-dialog {\n  max-width: 400px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ez-color-picker .ez-color-picker-drop-down {\n  z-index: 1002;\n  position: absolute;\n  min-width: -moz-max-content;\n  min-width: max-content;\n}[dir] .ez-color-picker .ez-color-picker-drop-down {\n  padding: 7px;\n  margin-top: 7px;\n  background-color: #fff;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n}\n[dir] .ez-color-picker .ez-color-picker-drop-down .ez-color-picker-reset {\n  margin: auto;\n}\n.ez-color-picker .ez-color-picker-drop-down .ez-color-picker-reset button {\n  width: 100%;\n}\n.ez-color-picker .ez-color-picker-drop-down:before, .ez-color-picker .ez-color-picker-drop-down:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n}\n[dir] .ez-color-picker .ez-color-picker-drop-down:before, [dir] .ez-color-picker .ez-color-picker-drop-down:after {\n  border: 7px solid transparent;\n  border-bottom-color: #dddddd;\n}\n[dir=ltr] .ez-color-picker .ez-color-picker-drop-down:before, [dir=ltr] .ez-color-picker .ez-color-picker-drop-down:after {\n  left: 0px;\n}\n[dir=rtl] .ez-color-picker .ez-color-picker-drop-down:before, [dir=rtl] .ez-color-picker .ez-color-picker-drop-down:after {\n  right: 0px;\n}\n[dir] .ez-color-picker .ez-color-picker-drop-down:after {\n  border: 8px solid transparent;\n  border-bottom-color: #fff;\n}\n[dir=ltr] .ez-color-picker .ez-color-picker-drop-down:after {\n  left: 1px;\n}\n[dir=rtl] .ez-color-picker .ez-color-picker-drop-down:after {\n  right: 1px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".textarea {\n  min-height: 40px;\n  line-height: 32px;\n  height: 40px;\n}[dir] .textarea {\n  border-width: 0px;\n}\n.label-container {\n  flex: 0 1 25%;\n  min-width: 136px;\n  line-height: 20px;\n}\n.label-container label {\n  opacity: 0.75;\n  color: hsl(0deg, 0%, 20%);\n  fill: hsl(0deg, 0%, 20%);\n  font-size: 13px;\n}\n.cell-container {\n  min-height: 18px;\n  position: relative;\n  overflow: visible;\n  display: block;\n}\n.cell-container input {\n  min-height: 28px;\n  overflow: auto;\n  height: 28px;\n}\n[dir] .cell-container input {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 0.4rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .stoke-shadow {\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05) !important;\n}\n.list-scrollbar {\n  height: calc(100vh - 500px - 38px);\n  min-height: 76px;\n  max-height: 878px;\n  pointer-events: auto;\n  overflow: auto;\n}\n[dir] .list-scrollbar {\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05) !important;\n}\n[dir] .list-scrollbar .item-hover {\n  cursor: pointer;\n  border-radius: 6px;\n}\n[dir] .list-scrollbar .item-hover:hover {\n  background-color: #d0f0fd;\n}\n.add-container {\n  min-width: 400px;\n  max-width: 900px;\n  max-height: 80vh;\n}\n[dir] .add-container {\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n}\n[dir] .add-container .fields-container {\n  background-color: #f7f7f7;\n  padding: 3px;\n  margin-top: 20px;\n  border-radius: 6px;\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05);\n}\n.add-container .fields-container input {\n  width: 100%;\n}\n[dir] .add-container .fields-container input {\n  border: 0px;\n  background-color: transparent;\n}\n[dir] .drag-cursor {\n  cursor: move;\n}\n[dir] .drag-cursor:active {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n[dir] .rename-input {\n  border: 2px solid lightgray;\n  padding: 1px;\n}\n.icon {\n  fill: #fff;\n  color: #fff;\n}\n[dir] .column-active {\n  background-color: #d0f0fd;\n}\n.handleResizeble {\n  top: 4px;\n  bottom: 0;\n  width: 3px;\n  height: 30px;\n  position: absolute;\n}\n[dir] .handleResizeble {\n  cursor: ew-resize;\n}\n[dir=ltr] .handleResizeble {\n  right: 0;\n}\n[dir=rtl] .handleResizeble {\n  left: 0;\n}\n[dir] .handleResizeble:hover, [dir] .handleResizeble:active {\n  background-color: #2d7ff9;\n  border-radius: 2px;\n}\n.flatpickr-calendar.open,\n.vs__dropdown-menu {\n  z-index: 100000 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir][data-v-0318e85a] .vs-dropdown--custom {\n  padding: 0;\n  margin: 5px;\n}\n[data-v-0318e85a] .add-filter-btn .vs-button-text {\n  font-weight: 500;\n}\n[dir] .dropdown-item-hover[data-v-0318e85a] {\n  cursor: pointer;\n}\n[dir] .dropdown-item-hover[data-v-0318e85a]:hover {\n  background-color: #f7f7f7;\n}\n.custom-select[data-v-0318e85a],\n.custom-input[data-v-0318e85a] {\n  height: 35px;\n  width: 100%;\n  min-width: 120px;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n[dir] .custom-select[data-v-0318e85a], [dir] .custom-input[data-v-0318e85a] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0px;\n  padding: 6px;\n  margin: 0;\n}\n[dir=ltr] .custom-select[data-v-0318e85a]:first-child, [dir=ltr] .custom-input[data-v-0318e85a]:first-child {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n[dir=rtl] .custom-select[data-v-0318e85a]:first-child, [dir=rtl] .custom-input[data-v-0318e85a]:first-child {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n[dir] .custom-select[data-v-0318e85a] {\n  background-size: 4px 4px, 5px 5px, 0.5em 0.5em;\n  background-repeat: no-repeat;\n}\n[dir=ltr] .custom-select[data-v-0318e85a] {\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;\n}\n[dir=rtl] .custom-select[data-v-0318e85a] {\n  background-image: linear-gradient(-45deg, transparent 50%, gray 50%), linear-gradient(-135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - (100% - 20px)) calc(1em + 2px), calc(100% - (100% - 15px)) calc(1em + 2px), calc(100% - (100% - 0.5em)) 0.5em;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-dropdown .filter-dropdown-menu[data-v-1aeec5d5] {\n  position: absolute;\n  z-index: 1000;\n}[dir] .filter-dropdown .filter-dropdown-menu[data-v-1aeec5d5] {\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n@media (max-width: 991px) {\n.filter-dropdown .filter-dropdown-menu[data-v-1aeec5d5] {\n    width: 90%;\n}\n}\n.filters[data-v-1aeec5d5] {\n  position: relative;\n  min-width: 500px;\n}\n[dir] .filters[data-v-1aeec5d5] {\n  background: #fff;\n}\n[dir] .filters input[data-v-1aeec5d5] {\n  border: 1px solid rgba(0, 0, 0, 0.1) !important;\n}\n.filters .filter-select[data-v-1aeec5d5] {\n  width: 100%;\n}\n[dir] .filters .filter-select[data-v-1aeec5d5] {\n  border-radius: 0;\n}\n[dir=ltr] .filters .filter-select input[data-v-1aeec5d5] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-right: 0px;\n}\n[dir=rtl] .filters .filter-select input[data-v-1aeec5d5] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-left: 0px;\n}\n.filters .delete-icon[data-v-1aeec5d5] {\n  height: 35px;\n  width: 50px;\n  min-width: 50px;\n  max-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir] .filters .delete-icon[data-v-1aeec5d5] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n[dir=ltr] .filters .delete-icon[data-v-1aeec5d5] {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n[dir=rtl] .filters .delete-icon[data-v-1aeec5d5] {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.filters .add-condition[data-v-1aeec5d5] {\n  color: hsl(0deg, 0%, 40%);\n  font-weight: 500;\n  font-size: 13px;\n}\n[dir] .filters .add-condition span[data-v-1aeec5d5] {\n  cursor: pointer;\n}\n.filters .custom-select[data-v-1aeec5d5],\n.filters .custom-input[data-v-1aeec5d5] {\n  height: 35px;\n  width: 100%;\n  min-width: 120px;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n[dir] .filters .custom-select[data-v-1aeec5d5], [dir] .filters .custom-input[data-v-1aeec5d5] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0px;\n  padding: 6px;\n  margin: 0;\n}\n[dir=ltr] .filters .custom-select[data-v-1aeec5d5], [dir=ltr] .filters .custom-input[data-v-1aeec5d5] {\n  border-right: 0px;\n}\n[dir=rtl] .filters .custom-select[data-v-1aeec5d5], [dir=rtl] .filters .custom-input[data-v-1aeec5d5] {\n  border-left: 0px;\n}\n[dir=ltr] .filters .custom-select[data-v-1aeec5d5]:first-child, [dir=ltr] .filters .custom-input[data-v-1aeec5d5]:first-child {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n[dir=rtl] .filters .custom-select[data-v-1aeec5d5]:first-child, [dir=rtl] .filters .custom-input[data-v-1aeec5d5]:first-child {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n[dir] .filters .custom-select[data-v-1aeec5d5] {\n  background-size: 4px 4px, 5px 5px, 0.5em 0.5em;\n  background-repeat: no-repeat;\n}\n[dir=ltr] .filters .custom-select[data-v-1aeec5d5] {\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;\n}\n[dir=rtl] .filters .custom-select[data-v-1aeec5d5] {\n  background-image: linear-gradient(-45deg, transparent 50%, gray 50%), linear-gradient(-135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - (100% - 20px)) calc(1em + 2px), calc(100% - (100% - 15px)) calc(1em + 2px), calc(100% - (100% - 0.5em)) 0.5em;\n}\n.filters .operator-select[data-v-1aeec5d5] {\n  min-width: 12px;\n  max-width: 66px;\n}\n[dir] .filters .operator-select[data-v-1aeec5d5] {\n  border-radius: 3px;\n}\n[dir=ltr] .filters .operator-select[data-v-1aeec5d5] {\n  margin-left: 10px;\n  margin-right: 10px;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=rtl] .filters .operator-select[data-v-1aeec5d5] {\n  margin-right: 10px;\n  margin-left: 10px;\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[data-v-1aeec5d5] .v-select .vs__selected-options {\n  max-width: 50vw;\n}\n[data-v-1aeec5d5] .v-select .vs__search {\n  width: 100px;\n}\n[dir][data-v-1aeec5d5] .vs__dropdown-toggle {\n  padding: 0.8px 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs__dropdown-menu .vs__dropdown-option {\n  width: -moz-max-content;\n  width: max-content;\n  min-width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sort-dropdown[data-v-962a6898] {\n  min-width: 200px;\n  position: absolute;\n  z-index: 1000;\n}[dir] .sort-dropdown[data-v-962a6898] {\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n@media (max-width: 991px) {\n.sort-dropdown[data-v-962a6898] {\n    width: 90%;\n}\n}\n.sort-dropdown .sort-content[data-v-962a6898] {\n  position: relative;\n  min-width: 500px;\n}\n[dir] .sort-dropdown .sort-content[data-v-962a6898] {\n  background: #fff;\n}\n.sort-dropdown .columns-list[data-v-962a6898] {\n  font-size: 12px;\n}\n[dir] .sort-dropdown .columns-list[data-v-962a6898] {\n  padding: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n[dir] .sort-dropdown .columns-list[data-v-962a6898]:hover {\n  background: #f8f8f8;\n}\n.sort-dropdown .w-select[data-v-962a6898] {\n  width: 200px !important;\n}\n.sort-another-dropdown[data-v-962a6898] {\n  min-width: 200px;\n  position: absolute;\n  z-index: 1000;\n}\n[dir] .sort-another-dropdown[data-v-962a6898] {\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n@media (max-width: 991px) {\n.sort-another-dropdown[data-v-962a6898] {\n    width: 90%;\n}\n}\n.sort-another-dropdown .sort-another-content[data-v-962a6898] {\n  position: relative;\n  min-width: 500px;\n}\n[dir] .sort-another-dropdown .sort-another-content[data-v-962a6898] {\n  background: #fff;\n}\n.sort-another-dropdown .columns-list[data-v-962a6898] {\n  font-size: 12px;\n}\n[dir] .sort-another-dropdown .columns-list[data-v-962a6898] {\n  padding: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n[dir] .sort-another-dropdown .columns-list[data-v-962a6898]:hover {\n  background: #f8f8f8;\n}\n.sort-another-dropdown .w-select[data-v-962a6898] {\n  width: 200px !important;\n}\n[dir] .sorted-container[data-v-962a6898] {\n  background: #fee2d5;\n  padding: 2px 8px;\n  border-radius: 3px;\n  box-shadow: 0 0px 1px 0 rgba(0, 0, 0, 0.06), 0 0px 0px 0 rgba(0, 0, 0, 0.08);\n}\n[dir] .draggable-list-group .draggable-list-group-item .drag-handle[data-v-962a6898] {\n  margin-top: 1.2rem;\n  cursor: grab !important;\n}\n[dir=ltr] .draggable-list-group .draggable-list-group-item .drag-handle[data-v-962a6898] {\n  margin-left: 1rem;\n}\n[dir=rtl] .draggable-list-group .draggable-list-group-item .drag-handle[data-v-962a6898] {\n  margin-right: 1rem;\n}\n[dir] .draggable-list-group .draggable-list-group-item.sortable-chosen .drag-handle[data-v-962a6898] {\n  cursor: grabbing !important;\n}\n.spreadsheet-add-new-sort-menu[data-v-962a6898] {\n  max-height: 300px;\n  overflow: auto;\n}\n.spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-thumb:horizontal {\n  /*The style of the horizontal scrollbar*/\n  width: 4px;\n  -webkit-border-radius: 6px;\n}\n[dir] .spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-thumb:horizontal {\n  background-color: #cccccc;\n}\n.spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-track-piece { /*The background color of the scrollbar*/\n  -webkit-border-radius: 0; /*Fillet width of the scrollbar*/\n}\n[dir] .spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-track-piece {\n  background-color: #fff;\n}\n.spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar {\n  width: 10px; /*the width of the scrollbar*/\n  height: 8px; /*the height of the scroll bar*/\n}\n.spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-thumb:vertical {\n  /*The style of the vertical scrollbar*/\n  height: 50px;\n  -webkit-border-radius: 4px;\n  outline: 2px solid #fff;\n  outline-offset: -2px;\n}\n[dir] .spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-thumb:vertical {\n  background-color: #999;\n  border: 2px solid #fff;\n}\n.spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-thumb:hover {\n  /*The hover style of the scroll bar*/\n  height: 50px;\n  -webkit-border-radius: 4px;\n}\n[dir] .spreadsheet-add-new-sort-menu[data-v-962a6898]::-webkit-scrollbar-thumb:hover {\n  background-color: #9f9f9f;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active-spreadsheet {\n  color: rgba(var(--vs-primary), 1) !important;\n}[dir] .active-spreadsheet {\n  border-color: rgba(var(--vs-primary), 1) !important;\n  border-bottom: 2px solid;\n}\n.subsheet-list,\n.table-container {\n  scrollbar-color: #c1c1c1 #f1f1f1;\n  scrollbar-width: thin;\n}\n.subsheet-list::-webkit-scrollbar,\n.table-container::-webkit-scrollbar {\n  height: 10px;\n  width: 10px;\n}\n[dir] .subsheet-list::-webkit-scrollbar-thumb, [dir] .table-container::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 20px;\n}\n[dir] .subsheet-list::-webkit-scrollbar-track, [dir] .table-container::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 20px;\n}\n.view-bar-container {\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  overflow: auto;\n  overflow-y: hidden;\n}\n[dir] .view-bar-container {\n  background: white;\n}\n[dir] .view-bar-container .view-bar-item {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  border-radius: 3px;\n}\n[dir=ltr] .view-bar-container .view-bar-item {\n  padding-right: 0.7rem;\n}\n[dir=rtl] .view-bar-container .view-bar-item {\n  padding-left: 0.7rem;\n}\n.view-bar-container .view-bar-item span {\n  font-weight: 500;\n  white-space: nowrap;\n}\n[dir] .view-bar-container .view-bar-item span {\n  cursor: pointer;\n}\n[dir=ltr] .view-bar-container .view-bar-item span {\n  margin-left: 5px;\n}\n[dir=rtl] .view-bar-container .view-bar-item span {\n  margin-right: 5px;\n}\n.view-bar-container svg {\n  color: rgb(98, 98, 98);\n  fill: rgb(98, 98, 98);\n  width: 20px;\n  height: 20px;\n}\n[dir] .view-bar-container svg {\n  cursor: pointer;\n}\n.show-hover {\n  display: none;\n  position: absolute;\n  top: 3px;\n}\n[dir=ltr] .show-hover {\n  right: -5px;\n}\n[dir=rtl] .show-hover {\n  left: -5px;\n}\n.view-bar-item:hover .show-hover {\n  display: block;\n}\n.view-bar-item {\n  position: relative;\n}\n.spreadsheet-list-dropdown-items p {\n  font-weight: 500;\n}\n[dir] .spreadsheet-rename-input {\n  border: 1px solid #ccc;\n  padding: 5px;\n  border-radius: 3px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".height-tall .v-select[data-v-03fbda74] {\n  height: 72px;\n}\n.height-medium .v-select[data-v-03fbda74] {\n  height: 39px;\n}\n.height-short .v-select[data-v-03fbda74] {\n  height: 17px;\n}\n[data-v-03fbda74] .vs__selected{\n  color: #000000 !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/assets/images/spreadsheet/medium.svg":
/*!********************************************************!*\
  !*** ./resources/assets/images/spreadsheet/medium.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/medium.svg?7102e69ac0c94780e2ffd7aa6d6d2cd6";

/***/ }),

/***/ "./resources/assets/images/spreadsheet/row-height.svg":
/*!************************************************************!*\
  !*** ./resources/assets/images/spreadsheet/row-height.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/row-height.svg?0d2d9f2f054dea4e55266b44bf5b3378";

/***/ }),

/***/ "./resources/assets/images/spreadsheet/short.svg":
/*!*******************************************************!*\
  !*** ./resources/assets/images/spreadsheet/short.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/short.svg?ba7b075f116df798a51da58f322a8c01";

/***/ }),

/***/ "./resources/assets/images/spreadsheet/tall.svg":
/*!******************************************************!*\
  !*** ./resources/assets/images/spreadsheet/tall.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/tall.svg?76e82dea5e9c4f3ca83239c9c891b54d";

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadsheetEditor_vue_vue_type_template_id_03fbda74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true& */ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true&");
/* harmony import */ var _SpreadsheetEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpreadsheetEditor.vue?vue&type=script&lang=js& */ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SpreadsheetEditor_vue_vue_type_style_index_0_id_03fbda74_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss& */ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss&");
/* harmony import */ var _SpreadsheetEditor_vue_vue_type_style_index_1_id_03fbda74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css& */ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _SpreadsheetEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpreadsheetEditor_vue_vue_type_template_id_03fbda74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpreadsheetEditor_vue_vue_type_template_id_03fbda74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03fbda74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/spreadsheet/SpreadsheetEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_0_id_03fbda74_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=0&id=03fbda74&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_0_id_03fbda74_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_0_id_03fbda74_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_0_id_03fbda74_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_0_id_03fbda74_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_1_id_03fbda74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=style&index=1&id=03fbda74&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_1_id_03fbda74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_1_id_03fbda74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_1_id_03fbda74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_style_index_1_id_03fbda74_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_template_id_03fbda74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/SpreadsheetEditor.vue?vue&type=template&id=03fbda74&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_template_id_03fbda74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetEditor_vue_vue_type_template_id_03fbda74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ColorPicker.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPicker_vue_vue_type_template_id_4bef910a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPicker.vue?vue&type=template&id=4bef910a& */ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=template&id=4bef910a&");
/* harmony import */ var _ColorPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorPicker.vue?vue&type=script&lang=js& */ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ColorPicker_vue_vue_type_style_index_0_id_4bef910a_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss& */ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ColorPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorPicker_vue_vue_type_template_id_4bef910a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorPicker_vue_vue_type_template_id_4bef910a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/spreadsheet/components/ColorPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_4bef910a_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=style&index=0&id=4bef910a&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_4bef910a_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_4bef910a_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_4bef910a_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_style_index_0_id_4bef910a_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=template&id=4bef910a&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=template&id=4bef910a& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_template_id_4bef910a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorPicker.vue?vue&type=template&id=4bef910a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ColorPicker.vue?vue&type=template&id=4bef910a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_template_id_4bef910a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorPicker_vue_vue_type_template_id_4bef910a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Columns.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Columns.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Columns_vue_vue_type_template_id_5b53b487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Columns.vue?vue&type=template&id=5b53b487& */ "./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=template&id=5b53b487&");
/* harmony import */ var _Columns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Columns.vue?vue&type=script&lang=js& */ "./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Columns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Columns_vue_vue_type_template_id_5b53b487___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Columns_vue_vue_type_template_id_5b53b487___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/spreadsheet/components/Columns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Columns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Columns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Columns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=template&id=5b53b487&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=template&id=5b53b487& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Columns_vue_vue_type_template_id_5b53b487___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Columns.vue?vue&type=template&id=5b53b487& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Columns.vue?vue&type=template&id=5b53b487&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Columns_vue_vue_type_template_id_5b53b487___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Columns_vue_vue_type_template_id_5b53b487___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ExpandColumn.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpandColumn_vue_vue_type_template_id_98a4d054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandColumn.vue?vue&type=template&id=98a4d054& */ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=template&id=98a4d054&");
/* harmony import */ var _ExpandColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandColumn.vue?vue&type=script&lang=js& */ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExpandColumn_vue_vue_type_style_index_0_id_98a4d054_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss& */ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExpandColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpandColumn_vue_vue_type_template_id_98a4d054___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpandColumn_vue_vue_type_template_id_98a4d054___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/spreadsheet/components/ExpandColumn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpandColumn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_style_index_0_id_98a4d054_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=style&index=0&id=98a4d054&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_style_index_0_id_98a4d054_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_style_index_0_id_98a4d054_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_style_index_0_id_98a4d054_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_style_index_0_id_98a4d054_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=template&id=98a4d054&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=template&id=98a4d054& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_template_id_98a4d054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExpandColumn.vue?vue&type=template&id=98a4d054& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/ExpandColumn.vue?vue&type=template&id=98a4d054&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_template_id_98a4d054___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpandColumn_vue_vue_type_template_id_98a4d054___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Header.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Header.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_0318e85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=0318e85a&scoped=true& */ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=template&id=0318e85a&scoped=true&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_id_0318e85a_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss& */ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss&");
/* harmony import */ var _Header_vue_vue_type_style_index_1_id_0318e85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true& */ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_0318e85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_0318e85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0318e85a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/spreadsheet/components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0318e85a_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=0&id=0318e85a&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0318e85a_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0318e85a_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0318e85a_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_0318e85a_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_1_id_0318e85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=style&index=1&id=0318e85a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_1_id_0318e85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_1_id_0318e85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_1_id_0318e85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_1_id_0318e85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=template&id=0318e85a&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=template&id=0318e85a&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_0318e85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=0318e85a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/Header.vue?vue&type=template&id=0318e85a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_0318e85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_0318e85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadsheetFilters_vue_vue_type_template_id_1aeec5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true& */ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true&");
/* harmony import */ var _SpreadsheetFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpreadsheetFilters.vue?vue&type=script&lang=js& */ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SpreadsheetFilters_vue_vue_type_style_index_0_id_1aeec5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true& */ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true&");
/* harmony import */ var _SpreadsheetFilters_vue_vue_type_style_index_1_id_1aeec5d5_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss& */ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _SpreadsheetFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpreadsheetFilters_vue_vue_type_template_id_1aeec5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpreadsheetFilters_vue_vue_type_template_id_1aeec5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1aeec5d5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_0_id_1aeec5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=0&id=1aeec5d5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_0_id_1aeec5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_0_id_1aeec5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_0_id_1aeec5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_0_id_1aeec5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_1_id_1aeec5d5_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=style&index=1&id=1aeec5d5&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_1_id_1aeec5d5_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_1_id_1aeec5d5_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_1_id_1aeec5d5_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_style_index_1_id_1aeec5d5_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_template_id_1aeec5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetFilters.vue?vue&type=template&id=1aeec5d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_template_id_1aeec5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetFilters_vue_vue_type_template_id_1aeec5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpreadsheetSort_vue_vue_type_template_id_962a6898_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true& */ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true&");
/* harmony import */ var _SpreadsheetSort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpreadsheetSort.vue?vue&type=script&lang=js& */ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SpreadsheetSort_vue_vue_type_style_index_0_id_962a6898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true& */ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SpreadsheetSort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpreadsheetSort_vue_vue_type_template_id_962a6898_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpreadsheetSort_vue_vue_type_template_id_962a6898_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "962a6898",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetSort.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_style_index_0_id_962a6898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=style&index=0&id=962a6898&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_style_index_0_id_962a6898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_style_index_0_id_962a6898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_style_index_0_id_962a6898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_style_index_0_id_962a6898_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_template_id_962a6898_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/spreadsheet/components/SpreadsheetSort.vue?vue&type=template&id=962a6898&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_template_id_962a6898_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpreadsheetSort_vue_vue_type_template_id_962a6898_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/mixins/hosMixin.js":
/*!*********************************************!*\
  !*** ./resources/js/src/mixins/hosMixin.js ***!
  \*********************************************/
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





function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    calculatePercentageBasedOnSeconds: function calculatePercentageBasedOnSeconds(seconds, type) {
      var cycleLength = {
        breakInS: 28800,
        // 8 hours
        driveInS: 39600,
        // 11 hours
        shiftInS: 50400,
        // 14 hours
        cycleInS: 252000 // 70 hours

      };

      if (seconds != null && type) {
        if (seconds === 0) return 100;
        return seconds / cycleLength[type] * 100;
      } else {
        return 0;
      }
    },
    convertSecondsToHoursAndMinutes: function convertSecondsToHoursAndMinutes(seconds) {
      if (seconds != null) {
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds - hours * 3600) / 60);
        return "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"));
      }
    },
    getCircleColor: function getCircleColor(seconds) {
      if (seconds != null) {
        var greenColor = "#33ef95";
        var greyColor = "#e9e9e9";
        var yellowColor = "#f3b543";
        var lightYellowColor = "#ffe6b3";
        var lightRedColor = "#ffc8bf";
        var minutes = seconds / 60;

        if (minutes <= 0) {
          return {
            valueColor: lightRedColor,
            rangeColor: lightRedColor
          };
        } else if (minutes > 0 && minutes < 30) {
          return {
            valueColor: yellowColor,
            rangeColor: lightYellowColor
          };
        } else {
          return {
            valueColor: greenColor,
            rangeColor: greyColor
          };
        }
      } else {
        return {
          valueColor: "#fff",
          rangeColor: "#fff"
        };
      }
    },
    initHosData: function initHosData(hosData, firstName, lastName) {
      if (hosData && hosData.length && (firstName || lastName)) {
        var firstNameLC = (firstName || "").toLowerCase();
        var lastNameLC = (lastName || "").toLowerCase();
        var driverHosData = hosData.find(function (_ref) {
          var externalDriverName = _ref.externalDriverName;
          var externalDriverNameLC = (externalDriverName || "").toLowerCase();

          if (externalDriverNameLC == firstNameLC + " " + lastNameLC) {
            return true;
          } else if (externalDriverNameLC.includes(firstNameLC) && externalDriverNameLC.includes(lastNameLC)) {
            return true;
          }

          return false;
        });

        if (driverHosData) {
          var breakValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.breakInS, "breakInS");
          var breakLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.breakInS);

          var _this$getCircleColor = this.getCircleColor(driverHosData.clocks.breakInS),
              breakValueColor = _this$getCircleColor.valueColor,
              breakRangeColor = _this$getCircleColor.rangeColor;

          var driveValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.driveInS, "driveInS");
          var driveLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.driveInS);

          var _this$getCircleColor2 = this.getCircleColor(driverHosData.clocks.driveInS),
              driveValueColor = _this$getCircleColor2.valueColor,
              driveRangeColor = _this$getCircleColor2.rangeColor;

          var shiftValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.shiftInS, "shiftInS");
          var shiftLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.shiftInS);

          var _this$getCircleColor3 = this.getCircleColor(driverHosData.clocks.shiftInS),
              shiftValueColor = _this$getCircleColor3.valueColor,
              shiftRangeColor = _this$getCircleColor3.rangeColor;

          var cycleValue = this.calculatePercentageBasedOnSeconds(driverHosData.clocks.cycleInS, "cycleInS");
          var cycleLabel = this.convertSecondsToHoursAndMinutes(driverHosData.clocks.cycleInS);

          var _this$getCircleColor4 = this.getCircleColor(driverHosData.clocks.cycleInS),
              cycleValueColor = _this$getCircleColor4.valueColor,
              cycleRangeColor = _this$getCircleColor4.rangeColor;

          return _objectSpread({}, driverHosData.clocks, {
            breakValue: breakValue,
            breakLabel: breakLabel,
            breakValueColor: breakValueColor,
            breakRangeColor: breakRangeColor,
            driveValue: driveValue,
            driveLabel: driveLabel,
            driveValueColor: driveValueColor,
            driveRangeColor: driveRangeColor,
            shiftValue: shiftValue,
            shiftLabel: shiftLabel,
            shiftValueColor: shiftValueColor,
            shiftRangeColor: shiftRangeColor,
            cycleValue: cycleValue,
            cycleLabel: cycleLabel,
            cycleValueColor: cycleValueColor,
            cycleRangeColor: cycleRangeColor
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/pages/excel/Spreadsheet.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/excel/Spreadsheet.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spreadsheet_vue_vue_type_template_id_dee30ba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spreadsheet.vue?vue&type=template&id=dee30ba2& */ "./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=template&id=dee30ba2&");
/* harmony import */ var _Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spreadsheet.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Spreadsheet_vue_vue_type_style_index_0_id_dee30ba2_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss& */ "./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spreadsheet_vue_vue_type_template_id_dee30ba2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spreadsheet_vue_vue_type_template_id_dee30ba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/excel/Spreadsheet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_dee30ba2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=style&index=0&id=dee30ba2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_dee30ba2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_dee30ba2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_dee30ba2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_style_index_0_id_dee30ba2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=template&id=dee30ba2&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=template&id=dee30ba2& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_template_id_dee30ba2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spreadsheet.vue?vue&type=template&id=dee30ba2& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/excel/Spreadsheet.vue?vue&type=template&id=dee30ba2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_template_id_dee30ba2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spreadsheet_vue_vue_type_template_id_dee30ba2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=26.js.map