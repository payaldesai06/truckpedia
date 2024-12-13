(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _campaign_templates_add_campaign_template_components_AddCampaignTemplates_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue */ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue");
/* harmony import */ var _config_geo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/config/geo */ "./resources/js/src/config/geo.js");
/* harmony import */ var _config_industries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/config/industries */ "./resources/js/src/config/industries.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");








function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }









var dict = {
  custom: {
    noOfLeads: {
      required: 'No. of Leads is required',
      integer: 'No. of Leads field must be an integer'
    },
    dailyLimit: {
      required: 'The field must be numeric and may contain 0 decimal points',
      integer: 'The field must be an integer',
      min_value: 'The value must be greater than or equal to 0',
      max_value: 'The value must be less than or equal to 1000'
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_14__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CampaignEmailDetails',
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_7__["VueEditor"],
    AddCampaignTemplate: _campaign_templates_add_campaign_template_components_AddCampaignTemplates_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  props: {
    campaignId: {
      type: Number || null,
      default: 0
    }
  },
  data: function data() {
    return {
      formData: {
        emailAccounts: [],
        state: null,
        city: null,
        industry: null,
        noOfLeads: 0
      },
      dailyEmailLimit: null,
      actionBtnText: 'Start',
      actionBtnIcon: 'play_arrow',
      actionStatus: '',
      addedLeads: 0,
      templates: [],
      template: {},
      sequences: [],
      emailAccounts: [],
      industries: _config_industries__WEBPACK_IMPORTED_MODULE_12__["default"],
      listOfStates: _config_geo__WEBPACK_IMPORTED_MODULE_11__["default"].usStatesFullNames,
      validationDict: {
        custom: {
          noOfLeads: {
            required: 'No. of Leads is required',
            min_value: 'No. of Leads must be between 1 and 1000',
            max_value: 'No. of Leads must be between 1 and 1000'
          }
        }
      },
      scheduleData: {}
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$validator.localize('en', this.validationDict);
              this.init();

            case 2:
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('marketing', ['getCachedMarketingEmails', 'getCampaignTemplates']), {
    companyId: function companyId() {
      return this.$route.params.id;
    },
    isSubmitDisabled: function isSubmitDisabled() {
      return !this.formData.noOfLeads || !Object(lodash__WEBPACK_IMPORTED_MODULE_13__["isEmpty"])(this.formData.noOfLeads) && (this.formData.noOfLeads > 1000 || this.formData.noOfLeads < 0) || Object(lodash__WEBPACK_IMPORTED_MODULE_13__["isEmpty"])(this.formData.state) && !Object(lodash__WEBPACK_IMPORTED_MODULE_13__["isEmpty"])(this.formData.city);
    },
    disabledSaveButton: function disabledSaveButton() {
      return this.errors.any() || !this.dailyEmailLimit;
    }
  }),
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  if (!this.getCampaignTemplates || this.getCampaignTemplates && this.getCampaignTemplates.meta) {
                    this.getEmailTemplates();
                  } else {
                    this.templates = this.getCampaignTemplates.templates;
                  }

                  if (this.getCachedMarketingEmails[this.companyId]) {
                    this.emailAccounts = this.getCachedMarketingEmails[this.companyId];
                  } else {
                    this.getEmailAccountList();
                  }

                  this.getSequenceData();
                  this.getCampaign();
                  this.getCampaignLeads();
                } catch (error) {}

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    getCampaign: function () {
      var _getCampaign = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3() {
        var id, _ref, payload, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                id = this.campaignId;
                _context3.next = 4;
                return this.$store.dispatch('marketing/getCampaignById', {
                  id: id,
                  superAdminOverwriteCompanyId: this.companyId
                });

              case 4:
                _ref = _context3.sent;
                payload = _ref.data.payload;

                if (!(payload && payload.campaign)) {
                  _context3.next = 27;
                  break;
                }

                this.formData.emailAccounts = payload.campaign.emailAccounts.map(function (_ref2) {
                  var emailAccountId = _ref2.emailAccountId;
                  return emailAccountId;
                });
                this.dailyEmailLimit = payload.campaign.dailyLimit || null;
                this.scheduleData = {
                  daysOfWeekTimes: payload.campaign.daysOfWeekTimes,
                  timezone: payload.campaign.timezone
                };
                status = payload.campaign.status;
                _context3.t0 = status;
                _context3.next = _context3.t0 === 'draft' ? 14 : _context3.t0 === 'active' ? 18 : _context3.t0 === 'paused' ? 22 : 26;
                break;

              case 14:
                this.actionBtnIcon = 'play_arrow';
                this.actionBtnText = 'Start';
                this.actionStatus = 'active';
                return _context3.abrupt("break", 27);

              case 18:
                this.actionBtnIcon = 'pause';
                this.actionBtnText = 'Pause';
                this.actionStatus = 'paused';
                return _context3.abrupt("break", 27);

              case 22:
                this.actionBtnIcon = 'play_arrow';
                this.actionBtnText = 'Resume';
                this.actionStatus = 'active';
                return _context3.abrupt("break", 27);

              case 26:
                return _context3.abrupt("break", 27);

              case 27:
                _context3.next = 33;
                break;

              case 29:
                _context3.prev = 29;
                _context3.t1 = _context3["catch"](0);
                _context3.next = 33;
                return this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context3.t1)
                });

              case 33:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 29]]);
      }));

      return function getCampaign() {
        return _getCampaign.apply(this, arguments);
      };
    }(),
    handleCampaign: function () {
      var _handleCampaign = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch('marketing/updateCampaign', {
                  id: this.campaignId.toString(),
                  status: this.actionStatus,
                  superAdminOverwriteCompanyId: this.companyId
                });

              case 3:
                response = _context4.sent;

                if (!(response && response.data)) {
                  _context4.next = 24;
                  break;
                }

                this.$vs.notify({
                  color: 'primary',
                  title: 'Campaign updated',
                  text: 'Campaign updated successfully.'
                });
                _context4.t0 = this.actionStatus;
                _context4.next = _context4.t0 === 'draft' ? 9 : _context4.t0 === 'active' ? 13 : _context4.t0 === 'paused' ? 17 : 21;
                break;

              case 9:
                this.actionBtnIcon = 'play_arrow';
                this.actionBtnText = 'Start';
                this.actionStatus = 'active';
                return _context4.abrupt("break", 22);

              case 13:
                this.actionBtnIcon = 'pause';
                this.actionBtnText = 'Pause';
                this.actionStatus = 'paused';
                return _context4.abrupt("break", 22);

              case 17:
                this.actionBtnIcon = 'play_arrow';
                this.actionBtnText = 'Resume';
                this.actionStatus = 'active';
                return _context4.abrupt("break", 22);

              case 21:
                return _context4.abrupt("break", 22);

              case 22:
                _context4.next = 25;
                break;

              case 24:
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'Invalid response from the server.'
                });

              case 25:
                _context4.next = 31;
                break;

              case 27:
                _context4.prev = 27;
                _context4.t1 = _context4["catch"](0);
                _context4.next = 31;
                return this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context4.t1)
                });

              case 31:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 27]]);
      }));

      return function handleCampaign() {
        return _handleCampaign.apply(this, arguments);
      };
    }(),
    getEmailTemplates: function () {
      var _getEmailTemplates = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5() {
        var _ref3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.$store.dispatch('marketing/getCampaignTemplates');

              case 2:
                _ref3 = _context5.sent;
                data = _ref3.data;
                this.templates = data.payload.templates;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getEmailTemplates() {
        return _getEmailTemplates.apply(this, arguments);
      };
    }(),
    getCampaignLeads: function () {
      var _getCampaignLeads = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee6() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.$store.dispatch('marketing/getLeads', {
                  superAdminOverwriteCompanyId: this.companyId,
                  campaignId: this.campaignId
                });

              case 2:
                _ref4 = _context6.sent;
                data = _ref4.data;
                this.addedLeads = data.payload.meta && data.payload.meta.totalItems || 0;
                this.formData.noOfLeads = data.payload.meta && data.payload.meta.totalItems || 0;

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getCampaignLeads() {
        return _getCampaignLeads.apply(this, arguments);
      };
    }(),
    getEmailAccountList: function () {
      var _getEmailAccountList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee7() {
        var _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.$store.dispatch('marketing/getEmailAccountList', {
                  superAdminOverwriteCompanyId: this.companyId
                });

              case 2:
                _ref5 = _context7.sent;
                data = _ref5.data;
                this.emailAccounts = data.payload.emailAccounts || [];
                this.$store.commit('marketing/setCachedMarketingEmails', {
                  id: this.companyId,
                  emails: this.emailAccounts
                });

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function getEmailAccountList() {
        return _getEmailAccountList.apply(this, arguments);
      };
    }(),
    getSequenceData: function () {
      var _getSequenceData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee8() {
        var _ref6, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.$store.dispatch('marketing/getSequence', {
                  id: Number(this.campaignId),
                  params: {
                    superAdminOverwriteCompanyId: this.companyId
                  }
                });

              case 2:
                _ref6 = _context8.sent;
                payload = _ref6.data.payload;

                if (payload && payload.sequences.length) {
                  this.template = {
                    sequences: payload.sequences.map(function (sequence) {
                      var _sequence$variants$ = sequence.variants[0],
                          content = _sequence$variants$.content,
                          subject = _sequence$variants$.subject;
                      return _objectSpread({}, sequence, {
                        content: content,
                        subject: subject,
                        variants: sequence.variants
                      });
                    })
                  };
                }

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function getSequenceData() {
        return _getSequenceData.apply(this, arguments);
      };
    }(),
    getTemplateDataById: function () {
      var _getTemplateDataById = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee9(templateId) {
        var _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (templateId) {
                  _context9.next = 4;
                  break;
                }

                this.template = {};
                this.originalData = {};
                return _context9.abrupt("return");

              case 4:
                _context9.prev = 4;
                _context9.next = 7;
                return this.$store.dispatch('marketing/getCampaignTemplateById', {
                  id: templateId
                });

              case 7:
                _ref7 = _context9.sent;
                data = _ref7.data;
                this.template = data.payload;
                this.originalData = structuredClone(this.template);
                _context9.next = 17;
                break;

              case 13:
                _context9.prev = 13;
                _context9.t0 = _context9["catch"](4);
                _context9.next = 17;
                return this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context9.t0)
                });

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[4, 13]]);
      }));

      return function getTemplateDataById(_x) {
        return _getTemplateDataById.apply(this, arguments);
      };
    }(),
    handleShowCampaigns: function handleShowCampaigns(value) {
      this.$emit('showCampaigns', value);
    },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee10() {
        var _this = this;

        var keysToCheck, payload, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(this.formData.noOfLeads > 0)) {
                  _context10.next = 20;
                  break;
                }

                _context10.prev = 1;
                keysToCheck = ['city', 'state', 'industry'];
                payload = {};
                keysToCheck.forEach(function (key) {
                  if (key === 'industry') {
                    if (_this.formData[key]) {
                      payload[key] = [_this.formData[key]];
                    }
                  } else if (_this.formData[key]) {
                    payload[key] = _this.formData[key];
                  }
                });

                if (!(Number(this.formData.noOfLeads) <= 0 || Number(this.formData.noOfLeads) <= this.addedLeads)) {
                  _context10.next = 8;
                  break;
                }

                this.$vs.notify({
                  color: 'warning',
                  title: 'No leads',
                  text: 'Your lead count is already full'
                });
                return _context10.abrupt("return");

              case 8:
                _context10.next = 10;
                return this.$store.dispatch('marketing/getLeadsforCampaign', _objectSpread({
                  id: this.campaignId,
                  leadsNeeded: Number(this.formData.noOfLeads) - this.addedLeads,
                  superAdminOverwriteCompanyId: Number(this.companyId)
                }, payload));

              case 10:
                response = _context10.sent;

                if (response && response.data.payload) {
                  this.addedLeads = response.data.payload.totalLeads;

                  if (response.data.payload.leadsAdded) {
                    this.$vs.notify({
                      color: 'primary',
                      title: 'Success',
                      text: "".concat(response.data.payload.leadsAdded, " leads have been successfully added.")
                    });
                  } else {
                    this.$vs.notify({
                      color: 'warning',
                      title: 'No leads',
                      text: 'No new leads were added. Please try again.'
                    });
                  }
                }

                _context10.next = 18;
                break;

              case 14:
                _context10.prev = 14;
                _context10.t0 = _context10["catch"](1);
                _context10.next = 18;
                return this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_9__["getApiErrorMsg"])(_context10.t0)
                });

              case 18:
                _context10.next = 22;
                break;

              case 20:
                _context10.next = 22;
                return this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: 'Please Add Valid Leads!'
                });

              case 22:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[1, 14]]);
      }));

      return function onSubmit() {
        return _onSubmit.apply(this, arguments);
      };
    }(),
    handleSaveTemplate: function () {
      var _handleSaveTemplate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee11(data) {
        var sequences, timezone, daysOfWeekTimes, emailPayload, payload, _ref8, sequenceData;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                sequences = data.sequences, timezone = data.timezone, daysOfWeekTimes = data.daysOfWeekTimes;
                emailPayload = _objectSpread({
                  id: this.campaignId,
                  dailyLimit: this.dailyEmailLimit.toString(),
                  //If we don't change it then it goes int in the payload then need to send string to the BE
                  superAdminOverwriteCompanyId: Number(this.$route.params.id)
                }, timezone && {
                  timezone: timezone
                }, daysOfWeekTimes && {
                  daysOfWeekTimes: daysOfWeekTimes
                });

                if (_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.formData.emailAccounts) !== _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.emailAccounts)) {
                  emailPayload.emailAccounts = this.formData.emailAccounts.map(function (id) {
                    return {
                      emailAccountId: id
                    };
                  });
                }

                _context11.next = 5;
                return this.$store.dispatch('marketing/updateCampaign', emailPayload);

              case 5:
                if (sequences && sequences.length) {
                  this.sequences = sequences.map(function (sequence, index) {
                    return {
                      id: sequence.id || null,
                      step: index + 1,
                      nextStepWaitForDays: sequence.nextStepWaitForDays,
                      variants: sequence.variants ? sequence.variants.map(function (data) {
                        return {
                          id: data.id,
                          content: sequence.content,
                          subject: sequence.subject
                        };
                      }) : [{
                        id: null,
                        content: sequence.content,
                        subject: sequence.subject
                      }]
                    };
                  });
                }

                payload = {
                  superAdminOverwriteCompanyId: this.companyId,
                  sequences: this.sequences
                };
                _context11.next = 9;
                return this.$store.dispatch('marketing/upsertSequence', {
                  id: Number(this.campaignId),
                  payload: payload
                });

              case 9:
                _ref8 = _context11.sent;
                sequenceData = _ref8.data;

                if (sequenceData.payload && sequenceData.payload.sequences.length) {
                  this.template = {
                    sequences: sequenceData.payload.sequences.map(function (sequence) {
                      return _objectSpread({}, sequence, sequence.variants[0]);
                    })
                  };
                }

                this.$vs.notify({
                  color: 'primary',
                  title: 'Success',
                  text: 'Campaign updated Successfully'
                });

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function handleSaveTemplate(_x2) {
        return _handleSaveTemplate.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CampaignNameModal',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object || null,
      default: null
    }
  },
  data: function data() {
    return {
      campaignName: '',
      campaignId: null
    };
  },
  computed: {
    showNameModal: {
      get: function get() {
        return this.dialogVisible;
      },
      set: function set(val) {
        if (!val) {
          this.onClose();
        }
      }
    },
    isValidForm: function isValidForm() {
      return this.campaignName;
    }
  },
  methods: {
    onClose: function onClose() {
      this.$emit('onClose');
      this.campaignName = '';
      this.campaignId = null;
    },
    onSubmit: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!this.campaignId) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return this.$store.dispatch('marketing/updateCampaign', {
                  id: this.campaignId,
                  superAdminOverwriteCompanyId: Number(this.$route.params.id),
                  name: this.campaignName
                });

              case 4:
                _context.next = 11;
                break;

              case 6:
                _context.next = 8;
                return this.$store.dispatch('marketing/createCampaign', {
                  superAdminOverwriteCompanyId: Number(this.$route.params.id),
                  name: this.campaignName
                });

              case 8:
                _ref = _context.sent;
                data = _ref.data;
                this.$emit('showEmailDetails', true, data.payload.campaign.id);

              case 11:
                this.$vs.notify({
                  color: 'primary',
                  title: 'Success',
                  text: "Campaign ".concat(this.campaignId ? 'Update' : 'Added', " Successfully")
                });
                this.onClose();
                this.$emit('refresh');
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_2__["getApiErrorMsg"])(_context.t0)
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 16]]);
      }));

      return function onSubmit() {
        return _onSubmit.apply(this, arguments);
      };
    }()
  },
  watch: {
    data: function data(_ref2) {
      var name = _ref2.name,
          id = _ref2.id;
      this.campaignName = name || name;
      this.campaignId = id || id;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CampaignTable',
  props: {
    campaignList: {
      type: Array,
      default: []
    },
    totalRecords: {
      required: true,
      type: Number
    },
    paginationMetaData: {
      required: true,
      type: Object | null
    }
  },
  data: function data() {
    return {
      loading: false,
      rows: 25,
      filters: {
        name: {
          value: null
        },
        status: {
          value: null
        }
      },
      sortBy: {
        field: null,
        order: null
      },
      statuses: [{
        id: 1,
        label: 'Active',
        value: 'active'
      }, {
        id: 2,
        label: 'Draft',
        value: 'draft'
      }, {
        id: 3,
        label: 'Completed',
        value: 'completed'
      }, {
        id: 4,
        label: 'Paused',
        value: 'paused'
      }],
      cssForStatusCell: {
        active: 'active-status',
        paused: 'paused-status',
        completed: 'completed-status',
        draft: 'draft-status'
      }
    };
  },
  computed: {
    getStatus: function getStatus() {
      var _this = this;

      return function (status) {
        if (!status) return '';
        return _this.statuses.find(function (item) {
          return item.value === status;
        }).label;
      };
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
    }
  },
  methods: {
    onSort: function onSort(_ref2) {
      var sortField = _ref2.sortField,
          sortOrder = _ref2.sortOrder;
      this.sortBy = {
        field: sortField,
        order: sortOrder && sortOrder === 1 ? 'asc' : 'desc'
      };
    },
    onPage: function onPage(_ref3) {
      var page = _ref3.page,
          rows = _ref3.rows;
      this.$emit('refresh', page + 1, rows);
    },
    toggleCampaignNamePopup: function toggleCampaignNamePopup(data) {
      this.$emit('dataForUpdate', data);
    },
    showEmailDetails: function showEmailDetails(id) {
      this.$emit('dataForUpdate', id);
    },
    openDeleteConfirmation: function openDeleteConfirmation(id) {
      this.$emit('deleteCampaign', id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CampaignNameModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CampaignNameModal.vue */ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue");
/* harmony import */ var _CampaignTable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CampaignTable.vue */ "./resources/js/src/views/pages/admin-company/CampaignTable.vue");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _CampaignEmailDetails_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CampaignEmailDetails.vue */ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue");
/* harmony import */ var _mixins_globalMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/mixins/globalMixins */ "./resources/js/src/mixins/globalMixins.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'EmailCampaigns',
  components: {
    CampaignNameModal: _CampaignNameModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CampaignTable: _CampaignTable_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CampaignEmailDetails: _CampaignEmailDetails_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mixins: [_mixins_globalMixins__WEBPACK_IMPORTED_MODULE_6__["default"]],
  data: function data() {
    return {
      campaignList: [],
      dialogVisible: false,
      editMode: false,
      paginationMetaData: null,
      totalRecords: 0,
      dataForUpdate: null,
      campaignId: null
    };
  },
  created: function created() {
    this.getCampaignList();
  },
  methods: {
    getCampaignList: function () {
      var _getCampaignList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var currentPage,
            pageSize,
            payload,
            _ref,
            data,
            _ref2,
            meta,
            _ref3,
            totalItems,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentPage = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
                pageSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 25;
                _context.prev = 2;
                this.$vs.loading();
                payload = {
                  page: currentPage,
                  pageSize: pageSize,
                  superAdminOverwriteCompanyId: Number(this.$route.params.id)
                };
                _context.next = 7;
                return this.$store.dispatch('marketing/getCampaigns', payload);

              case 7:
                _ref = _context.sent;
                data = _ref.data;
                this.campaignList = data.payload.campaigns;
                _ref2 = (data || {}).payload || {}, meta = _ref2.meta;
                _ref3 = meta || {}, totalItems = _ref3.totalItems;
                this.totalRecords = totalItems || 0;
                this.paginationMetaData = meta;
                this.currentPage = meta.currentPage;
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](2);
                this.$vs.notify({
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["getApiErrorMsg"])(_context.t0)
                });

              case 20:
                _context.prev = 20;
                this.$vs.loading.close();
                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 17, 20, 23]]);
      }));

      return function getCampaignList() {
        return _getCampaignList.apply(this, arguments);
      };
    }(),
    getDataForUpdate: function () {
      var _getDataForUpdate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (data.name) {
                  this.dialogVisible = true;
                  this.dataForUpdate = data;
                } else {
                  this.campaignId = data; // here id is coming in data

                  this.toggleEmailDetails(true);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getDataForUpdate(_x) {
        return _getDataForUpdate.apply(this, arguments);
      };
    }(),
    toggleEmailDetails: function toggleEmailDetails(value, campaignId) {
      this.editMode = value;

      if (!value) {
        this.getCampaignList();
      }

      if (campaignId) {
        this.campaignId = campaignId;
      }
    },
    openDeleteConfirmation: function () {
      var _openDeleteConfirmation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(id) {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$vs.dialog({
                  type: 'confirm',
                  color: 'danger',
                  title: 'Delete Campaign',
                  text: 'Are you sure you want to remove this campaign?',
                  accept: function accept() {
                    return _this.deleteCampaign(id);
                  }
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function openDeleteConfirmation(_x2) {
        return _openDeleteConfirmation.apply(this, arguments);
      };
    }(),
    deleteCampaign: function () {
      var _deleteCampaign = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.$store.dispatch('marketing/deleteCampaign', {
                  id: id,
                  superAdminOverwriteCompanyId: Number(this.$route.params.id)
                });

              case 3:
                this.showSuccessMessage('Campaign Deleted Successfully', 3000);

                if (this.campaignList.length === 1 && this.paginationMetaData.currentPage > 1) {
                  // if there is only  one element on current page go back to previous page
                  document.querySelector('.p-highlight').previousSibling.click();
                } else {
                  // refresh the current page
                  document.querySelector('.p-highlight').click();
                }

                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                this.showErrorMessage(Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_4__["getApiErrorMsg"])(_context4.t0));

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      return function deleteCampaign(_x3) {
        return _deleteCampaign.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true& ***!
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

  return _c("div", [_c("div", {
    staticClass: "under-line"
  }, [_c("h4", {
    staticClass: "pt-3"
  }, [_vm._v("Accounts to use")]), _vm._v(" "), _c("vs-row", {
    staticClass: "gap-2",
    attrs: {
      "vs-w": "12"
    }
  }, [_c("vs-col", {
    attrs: {
      "vs-lg": "4",
      "vs-sm": "4",
      "vs-xs": "12"
    }
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("label", {
    staticClass: "text-sm w-full opacity-75 mr-2"
  }, [_vm._v("\n            Select one or more accounts to send emails from\n          ")]), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.emailAccounts,
      label: "email",
      multiple: "",
      closeOnSelect: false,
      reduce: function reduce(option) {
        return option.id;
      }
    },
    model: {
      value: _vm.formData.emailAccounts,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "emailAccounts", $$v);
      },
      expression: "formData.emailAccounts"
    }
  })], 1)]), _vm._v(" "), _c("vs-col", {
    attrs: {
      "vs-lg": "3",
      "vs-sm": "3",
      "vs-xs": "12"
    }
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" No. of Leads "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|integer|min_value:1|max_value:1000",
      expression: "'required|integer|min_value:1|max_value:1000'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      "data-vv-name": "noOfLeads",
      "data-vv-validate-on": "blur",
      min: 1,
      max: 1000
    },
    model: {
      value: _vm.formData.noOfLeads,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "noOfLeads", $$v);
      },
      expression: "formData.noOfLeads"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n            " + _vm._s(_vm.errors.first("noOfLeads")) + "\n          ")])], 1)]), _vm._v(" "), _c("vs-col", {
    attrs: {
      "vs-lg": "3",
      "vs-sm": "3",
      "vs-xs": "12"
    }
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" Daily Limit "), _c("field-required-sign")], 1), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required|integer|min_value:0|max_value:1000",
      expression: "'required|integer|min_value:0|max_value:1000'"
    }],
    staticClass: "w-full",
    attrs: {
      type: "number",
      name: "dailyLimit",
      "data-vv-validate-on": "blur",
      placeholder: "200"
    },
    model: {
      value: _vm.dailyEmailLimit,
      callback: function callback($$v) {
        _vm.dailyEmailLimit = $$v;
      },
      expression: "dailyEmailLimit"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n            " + _vm._s(_vm.errors.first("dailyLimit")) + "\n          ")])], 1)]), _vm._v(" "), _c("vs-col", {
    attrs: {
      "vs-lg": "1",
      "vs-sm": "2",
      "vs-xs": "12"
    }
  }, [_c("vs-button", {
    staticClass: "action-btn mt-6",
    attrs: {
      color: "primary",
      type: "border",
      icon: _vm.actionBtnIcon
    },
    on: {
      click: _vm.handleCampaign
    }
  }, [_vm._v("\n          " + _vm._s(_vm.actionBtnText) + "\n        ")])], 1)], 1), _vm._v(" "), _c("h4", {
    staticClass: "pt-3"
  }, [_vm._v("Search leads based on")]), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("vs-row", {
    attrs: {
      "vs-w": "12"
    }
  }, [_c("vs-col", {
    staticClass: "pr-2",
    attrs: {
      "vs-lg": "3",
      "vs-sm": "3",
      "vs-xs": "12"
    }
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("label", {
    staticClass: "text-sm w-full opacity-75 mr-2"
  }, [_vm._v("Industry")]), _vm._v(" "), _c("v-select", {
    staticClass: "w-full industry-dropdown",
    attrs: {
      options: _vm.industries,
      dense: "",
      reduce: function reduce(option) {
        return option.value;
      }
    },
    model: {
      value: _vm.formData.industry,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "industry", $$v);
      },
      expression: "formData.industry"
    }
  })], 1)]), _vm._v(" "), _c("vs-col", {
    staticClass: "pr-2",
    attrs: {
      "vs-lg": "3",
      "vs-sm": "3",
      "vs-xs": "12"
    }
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v(" City ")]), _vm._v(" "), _c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.formData.city,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "city", $$v);
      },
      expression: "formData.city"
    }
  })], 1)])]), _vm._v(" "), _c("vs-col", {
    staticClass: "pr-2",
    attrs: {
      "vs-type": "flex",
      "vs-justify": "left",
      "vs-align": "center",
      "vs-lg": "3",
      "vs-sm": "3",
      "vs-xs": "12"
    }
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("\n              State\n              "), _vm.formData.city ? _c("field-required-sign") : _vm._e()], 1), _vm._v(" "), _c("v-select", {
    staticClass: "w-full state-dropdown",
    attrs: {
      options: _vm.listOfStates,
      label: "Select state",
      dense: ""
    },
    model: {
      value: _vm.formData.state,
      callback: function callback($$v) {
        _vm.$set(_vm.formData, "state", $$v);
      },
      expression: "formData.state"
    }
  })], 1)]), _vm._v(" "), _c("vs-col", {
    attrs: {
      "vs-type": "flex",
      "vs-justify": "left",
      "vs-align": "end",
      "vs-lg": "3",
      "vs-sm": "3",
      "vs-xs": "12"
    }
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      disabled: _vm.isSubmitDisabled
    },
    on: {
      click: _vm.onSubmit
    }
  }, [_vm._v("\n            Submit\n          ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "under-line"
  }, [_c("h4", {
    staticClass: "pt-5"
  }, [_vm._v("Results:")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-5 justify-center"
  }, [_c("div", {
    staticClass: "p-10 custom-border"
  }, [_c("p", {
    staticClass: "leads-heading"
  }, [_vm._v("Added Leads")]), _vm._v(" "), _c("p", {
    staticClass: "lead-text pt-3"
  }, [_vm._v(_vm._s(_vm.addedLeads))])]), _vm._v(" "), _c("div", {
    staticClass: "p-10 custom-border"
  }, [_c("p", {
    staticClass: "leads-heading"
  }, [_vm._v("Target Number")]), _vm._v(" "), _c("p", {
    staticClass: "lead-text pt-3"
  }, [_vm._v(_vm._s(_vm.formData.noOfLeads))])])])]), _vm._v(" "), _c("div", {
    staticClass: "pt-10"
  }, [_c("div", {
    staticClass: "flex justify-start"
  }, [_c("div", {
    staticClass: "w-1/4"
  }, [_vm._m(0), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      options: _vm.templates,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      }
    },
    on: {
      input: _vm.getTemplateDataById
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pt-10"
  }, [_c("AddCampaignTemplate", {
    attrs: {
      template: _vm.template,
      showTemplateName: false,
      disabledSaveButton: _vm.disabledSaveButton,
      scheduleData: _vm.scheduleData
    },
    on: {
      templateSaved: _vm.handleSaveTemplate,
      showCampaigns: _vm.handleShowCampaigns
    }
  })], 1)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("label", {
    staticClass: "text-sm w-full opacity-75 mr-2"
  }, [_c("strong", [_vm._v("Select Template")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=template&id=45c76f1d&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=template&id=45c76f1d& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "email-campaigns",
    attrs: {
      title: "".concat(_vm.campaignId ? "Edit" : "Add", " Campaign Name"),
      active: _vm.showNameModal
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.showNameModal = $event;
      }
    }
  }, [_c("div", {
    staticClass: "vx-row px-5 mt-3"
  }, [_c("label", {
    attrs: {
      for: "Campaign Name"
    }
  }), _vm._v(" "), _c("vs-input", {
    staticClass: "p-column-filter w-full",
    attrs: {
      type: "text",
      placeholder: "Give your campaign a name"
    },
    model: {
      value: _vm.campaignName,
      callback: function callback($$v) {
        _vm.campaignName = $$v;
      },
      expression: "campaignName"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full flex gap-4 justify-end mt-5"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "border"
    },
    on: {
      click: _vm.onClose
    }
  }, [_vm._v("\n      Cancel\n    ")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      color: "primary",
      disabled: !_vm.isValidForm
    },
    on: {
      click: _vm.onSubmit
    }
  }, [_vm._v("\n      Continue\n    ")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true& ***!
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

  return _c("DataTable", {
    staticClass: "mt-12",
    attrs: {
      value: _vm.campaignList,
      paginator: true,
      rows: _vm.rows,
      rowHover: true,
      lazy: true,
      totalRecords: _vm.totalRecords,
      filters: _vm.filters,
      loading: _vm.loading,
      responsiveLayout: "scroll",
      rowsPerPageOptions: [10, 25, 50],
      removableSort: ""
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
        return [_c("b", [_vm._v(" No records found ")])];
      },
      proxy: true
    }, _vm.footerText ? {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "vx-row flex justify-between items-center"
        }, [_c("div", {
          staticClass: "vx-col"
        }, [_vm._v(_vm._s(_vm.footerText))])])];
      },
      proxy: true
    } : null], null, true)
  }, [_c("Column", {
    attrs: {
      field: "name",
      header: "Name",
      sortable: false,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var name = _ref.data.name;
        return [_c("div", {
          staticClass: "name-user"
        }, [_vm._v("\n        " + _vm._s(name || "") + "\n      ")])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "status",
      header: "Status",
      sortable: false,
      showFilterMenu: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var status = _ref2.data.status;
        return [_c("span", {
          staticClass: "status",
          class: status ? _vm.cssForStatusCell[status] : ""
        }, [_vm._v("\n        " + _vm._s(_vm.getStatus(status)) + "\n      ")])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "leadsSent",
      header: "Sent"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n      " + _vm._s(slotProps.data.leadsSent) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "leadsOpened",
      header: "Opened"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n      " + _vm._s(slotProps.data.leadsOpened) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "leadsReplied",
      header: "Replied"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(slotProps) {
        return [_vm._v("\n      " + _vm._s(slotProps.data.leadsReplied) + "\n    ")];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      header: "Actions"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var _ref3$data = _ref3.data,
            id = _ref3$data.id,
            name = _ref3$data.name;
        return [_c("div", {
          staticClass: "action-icons"
        }, [_c("div", {
          on: {
            click: function click($event) {
              return _vm.showEmailDetails(id);
            }
          }
        }, [_c("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none"
          }
        }, [_c("path", {
          attrs: {
            d: "M7.243 18.5001H3V14.2571L14.435 2.82208C14.6225 2.63461 14.8768 2.5293 15.142 2.5293C15.4072 2.5293 15.6615 2.63461 15.849 2.82208L18.678 5.65108C18.8655 5.83861 18.9708 6.09292 18.9708 6.35808C18.9708 6.62325 18.8655 6.87756 18.678 7.06508L7.243 18.5001ZM3 20.5001H21V22.5001H3V20.5001Z",
            fill: "#6B7280"
          }
        })])]), _vm._v(" "), _c("div", {
          staticClass: "pr-2"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer text-danger",
          attrs: {
            size: "small",
            icon: "delete"
          },
          on: {
            click: function click($event) {
              $event.stopPropagation();
              return _vm.openDeleteConfirmation(id);
            }
          }
        })], 1), _vm._v(" "), _c("vs-dropdown", [_c("div", [_c("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none"
          }
        }, [_c("path", {
          attrs: {
            d: "M5 10.5C3.9 10.5 3 11.4 3 12.5C3 13.6 3.9 14.5 5 14.5C6.1 14.5 7 13.6 7 12.5C7 11.4 6.1 10.5 5 10.5ZM19 10.5C17.9 10.5 17 11.4 17 12.5C17 13.6 17.9 14.5 19 14.5C20.1 14.5 21 13.6 21 12.5C21 11.4 20.1 10.5 19 10.5ZM12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5Z",
            fill: "#6B7280"
          }
        })])]), _vm._v(" "), _c("vs-dropdown-menu", [_c("vs-dropdown-item", [_c("div", {
          staticClass: "px-3",
          on: {
            click: function click($event) {
              return _vm.toggleCampaignNamePopup({
                id: id,
                name: name
              });
            }
          }
        }, [_vm._v("\n                Rename\n              ")])])], 1)], 1)], 1)];
      }
    }])
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=template&id=10d5ef4c&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=template&id=10d5ef4c& ***!
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

  return _c("div", [!_vm.editMode ? _c("div", [_c("div", [_c("div", {
    staticClass: "flex justify-end"
  }, [_c("vs-button", {
    attrs: {
      type: "filled",
      icon: "add"
    },
    on: {
      click: function click($event) {
        _vm.dialogVisible = true;
      }
    }
  }, [_vm._v("\n          Add New\n        ")])], 1)]), _vm._v(" "), _c("campaign-table", {
    attrs: {
      campaignList: _vm.campaignList,
      paginationMetaData: _vm.paginationMetaData,
      totalRecords: _vm.totalRecords
    },
    on: {
      refresh: _vm.getCampaignList,
      dataForUpdate: _vm.getDataForUpdate,
      deleteCampaign: _vm.openDeleteConfirmation
    }
  })], 1) : _c("campaign-email-details", {
    attrs: {
      campaignId: _vm.campaignId
    },
    on: {
      showCampaigns: _vm.toggleEmailDetails
    }
  }), _vm._v(" "), _c("campaign-name-modal", {
    attrs: {
      dialogVisible: _vm.dialogVisible,
      data: _vm.dataForUpdate
    },
    on: {
      onClose: function onClose($event) {
        _vm.dialogVisible = false;
      },
      refresh: _vm.getCampaignList,
      showEmailDetails: _vm.toggleEmailDetails
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lead-text {\n  font-size: 40px;\n  font-weight: 700;\n  line-height: 22px;\n  color: #1877f2;\n}[dir] .lead-text {\n  text-align: center;\n}\n.custom-border {\n  min-width: 20vw;\n}\n[dir] .custom-border {\n  border-radius: 12px;\n  border: 1px solid #1877f2;\n}\n.leads-heading {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 22px;\n}\n[dir] .leads-heading {\n  text-align: center;\n}\n[dir] .custom-bg {\n  background-color: #f3f4f7;\n  padding: 8px !important;\n}\n[dir] .under-line {\n  border-bottom: 1px solid #cfcfd3;\n  padding-bottom: 2rem;\n}\n.template-button {\n  color: #1877f2;\n}\n[dir] .template-button {\n  border: 1px solid #1877f2;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n.scrollable-height {\n  height: 50rem;\n}\n[dir] .send-email-wrap {\n  border-radius: 8px;\n  border: 1px solid var(--gray-200, #e5e7eb);\n  background: var(--brand-neutrals-white, #fff);\n  margin: 15px;\n  margin-top: 0px;\n}\n.send-email-wrap .send-email-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir] .send-email-wrap .send-email-header {\n  padding: 15px;\n}\n.send-email-wrap .send-email-header input {\n  outline: none;\n  min-width: 75%;\n}\n[dir] .send-email-wrap .send-email-header input {\n  border: none;\n}\n[dir] .template-name-input {\n  margin: 15px;\n}\n[dir] .custom-toolbar .ql-toolbar.ql-snow, [dir] .custom-toolbar .ql-container.ql-snow {\n  border: none;\n}\n.custom-toolbar .ql-container.ql-snow {\n  height: 372px;\n}\n.industry-dropdown .vs__dropdown-menu {\n  max-height: 200px;\n  overflow-y: auto;\n}\n.delay-day-input {\n  width: 80px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action-btn[data-v-39bfc11b] {\n  width: 150px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".email-campaigns .p-dialog {\n  width: 40vw;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .active-status[data-v-26faa0ee] {\n  background: var(--blue-600, #2563eb);\n}\n[dir] .completed-status[data-v-26faa0ee] {\n  background: var(--green-600, #16a34a);\n}\n[dir] .draft-status[data-v-26faa0ee] {\n  background: var(--gray-600, #4b5563);\n}\n[dir] .paused-status[data-v-26faa0ee] {\n  background: var(--red-600, #b7552b);\n}\n.status[data-v-26faa0ee] {\n  color: #fff;\n}\n[dir] .status[data-v-26faa0ee] {\n  border-radius: 4px;\n  padding: 2px 6px;\n}\n.action-icons[data-v-26faa0ee] {\n  display: flex;\n  align-items: center;\n}\n[dir] .action-icons svg[data-v-26faa0ee] {\n  cursor: pointer;\n}\n[dir=ltr] .action-icons svg[data-v-26faa0ee] {\n  margin-right: 15px;\n}\n[dir=rtl] .action-icons svg[data-v-26faa0ee] {\n  margin-left: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss&");

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

/***/ "./resources/js/src/config/geo.js":
/*!****************************************!*\
  !*** ./resources/js/src/config/geo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  usStatesFullNames: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
});

/***/ }),

/***/ "./resources/js/src/config/industries.js":
/*!***********************************************!*\
  !*** ./resources/js/src/config/industries.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  label: 'Accounting',
  value: 'accounting'
}, {
  label: 'Agriculture',
  value: 'agriculture'
}, {
  label: 'Airlines/Aviation',
  value: 'airlines/aviation'
}, {
  label: 'Alternative Dispute Resolution',
  value: 'alternative dispute resolution'
}, {
  label: 'Alternative Medicine',
  value: 'alternative medicine'
}, {
  label: 'Animation',
  value: 'animation'
}, {
  label: 'Apparel & Fashion',
  value: 'apparel & fashion'
}, {
  label: 'Architecture & Planning',
  value: 'architecture & planning'
}, {
  label: 'Arts & Crafts',
  value: 'arts & crafts'
}, {
  label: 'Automotive',
  value: 'automotive'
}, {
  label: 'Aviation & Aerospace',
  value: 'aviation & aerospace'
}, {
  label: 'Banking',
  value: 'banking'
}, {
  label: 'Biotechnology',
  value: 'biotechnology'
}, {
  label: 'Broadcast Media',
  value: 'broadcast media'
}, {
  label: 'Building Materials',
  value: 'building materials'
}, {
  label: 'Business Supplies & Equipment',
  value: 'business supplies & equipment'
}, {
  label: 'Capital Markets',
  value: 'capital markets'
}, {
  label: 'Chemicals',
  value: 'chemicals'
}, {
  label: 'Civic & Social Organization',
  value: 'civic & social organization'
}, {
  label: 'Civil Engineering',
  value: 'civil engineering'
}, {
  label: 'Commercial Real Estate',
  value: 'commercial real estate'
}, {
  label: 'Computer & Network Security',
  value: 'computer & network security'
}, {
  label: 'Computer Games',
  value: 'computer games'
}, {
  label: 'Computer Hardware',
  value: 'computer hardware'
}, {
  label: 'Computer Networking',
  value: 'computer networking'
}, {
  label: 'Computer Software',
  value: 'computer software'
}, {
  label: 'Construction',
  value: 'construction'
}, {
  label: 'Consumer Electronics',
  value: 'consumer electronics'
}, {
  label: 'Consumer Goods',
  value: 'consumer goods'
}, {
  label: 'Consumer Services',
  value: 'consumer services'
}, {
  label: 'Cosmetics',
  value: 'cosmetics'
}, {
  label: 'Dairy',
  value: 'dairy'
}, {
  label: 'Defense & Space',
  value: 'defense & space'
}, {
  label: 'Design',
  value: 'design'
}, {
  label: 'E-Learning',
  value: 'e-learning'
}, {
  label: 'Education Management',
  value: 'education management'
}, {
  label: 'Electrical/Electronic Manufacturing',
  value: 'electrical/electronic manufacturing'
}, {
  label: 'Entertainment',
  value: 'entertainment'
}, {
  label: 'Environmental Services',
  value: 'environmental services'
}, {
  label: 'Events Services',
  value: 'events services'
}, {
  label: 'Executive Office',
  value: 'executive office'
}, {
  label: 'Facilities Services',
  value: 'facilities services'
}, {
  label: 'Farming',
  value: 'farming'
}, {
  label: 'Financial Services',
  value: 'financial services'
}, {
  label: 'Fine Art',
  value: 'fine art'
}, {
  label: 'Fishery',
  value: 'fishery'
}, {
  label: 'Food & Beverages',
  value: 'food & beverages'
}, {
  label: 'Food Production',
  value: 'food production'
}, {
  label: 'Fund-Raising',
  value: 'fund-raising'
}, {
  label: 'Furniture',
  value: 'furniture'
}, {
  label: 'Gambling & Casinos',
  value: 'gambling & casinos'
}, {
  label: 'Glass, Ceramics & Concrete',
  value: 'glass, ceramics & concrete'
}, {
  label: 'Government Administration',
  value: 'government administration'
}, {
  label: 'Government Relations',
  value: 'government relations'
}, {
  label: 'Graphic Design',
  value: 'graphic design'
}, {
  label: 'Health, Wellness & Fitness',
  value: 'health, wellness & fitness'
}, {
  label: 'Higher Education',
  value: 'higher education'
}, {
  label: 'Hospital & Health Care',
  value: 'hospital & health care'
}, {
  label: 'Hospitality',
  value: 'hospitality'
}, {
  label: 'Human Resources',
  value: 'human resources'
}, {
  label: 'Import & Export',
  value: 'import & export'
}, {
  label: 'Individual & Family Services',
  value: 'individual & family services'
}, {
  label: 'Industrial Automation',
  value: 'industrial automation'
}, {
  label: 'Information Services',
  value: 'information services'
}, {
  label: 'Information Technology & Services',
  value: 'information technology & services'
}, {
  label: 'Insurance',
  value: 'insurance'
}, {
  label: 'International Affairs',
  value: 'international affairs'
}, {
  label: 'International Trade & Development',
  value: 'international trade & development'
}, {
  label: 'Internet',
  value: 'internet'
}, {
  label: 'Investment Banking',
  value: 'investment banking'
}, {
  label: 'Investment Management',
  value: 'investment management'
}, {
  label: 'Judiciary',
  value: 'judiciary'
}, {
  label: 'Law Enforcement',
  value: 'law enforcement'
}, {
  label: 'Law Practice',
  value: 'law practice'
}, {
  label: 'Legal Services',
  value: 'legal services'
}, {
  label: 'Legislative Office',
  value: 'legislative office'
}, {
  label: 'Leisure, Travel & Tourism',
  value: 'leisure, travel & tourism'
}, {
  label: 'Libraries',
  value: 'libraries'
}, {
  label: 'Logistics & Supply Chain',
  value: 'logistics & supply chain'
}, {
  label: 'Luxury Goods & Jewelry',
  value: 'luxury goods & jewelry'
}, {
  label: 'Machinery',
  value: 'machinery'
}, {
  label: 'Management Consulting',
  value: 'management consulting'
}, {
  label: 'Maritime',
  value: 'maritime'
}, {
  label: 'Market Research',
  value: 'market research'
}, {
  label: 'Marketing & Advertising',
  value: 'marketing & advertising'
}, {
  label: 'Mechanical Or Industrial Engineering',
  value: 'mechanical or industrial engineering'
}, {
  label: 'Media Production',
  value: 'media production'
}, {
  label: 'Medical Devices',
  value: 'medical devices'
}, {
  label: 'Medical Practice',
  value: 'medical practice'
}, {
  label: 'Mental Health Care',
  value: 'mental health care'
}, {
  label: 'Military',
  value: 'military'
}, {
  label: 'Mining & Metals',
  value: 'mining & metals'
}, {
  label: 'Motion Pictures & Film',
  value: 'motion pictures & film'
}, {
  label: 'Museums & Institutions',
  value: 'museums & institutions'
}, {
  label: 'Music',
  value: 'music'
}, {
  label: 'Nanotechnology',
  value: 'nanotechnology'
}, {
  label: 'Newspapers',
  value: 'newspapers'
}, {
  label: 'Nonprofit Organization Management',
  value: 'nonprofit organization management'
}, {
  label: 'Oil & Energy',
  value: 'oil & energy'
}, {
  label: 'Online Media',
  value: 'online media'
}, {
  label: 'Outsourcing/Offshoring',
  value: 'outsourcing/offshoring'
}, {
  label: 'Package/Freight Delivery',
  value: 'package/freight delivery'
}, {
  label: 'Packaging & Containers',
  value: 'packaging & containers'
}, {
  label: 'Paper & Forest Products',
  value: 'paper & forest products'
}, {
  label: 'Performing Arts',
  value: 'performing arts'
}, {
  label: 'Pharmaceuticals',
  value: 'pharmaceuticals'
}, {
  label: 'Philanthropy',
  value: 'philanthropy'
}, {
  label: 'Photography',
  value: 'photography'
}, {
  label: 'Plastics',
  value: 'plastics'
}, {
  label: 'Political Organization',
  value: 'political organization'
}, {
  label: 'Primary/Secondary Education',
  value: 'primary/secondary education'
}, {
  label: 'Printing',
  value: 'printing'
}, {
  label: 'Professional Training & Coaching',
  value: 'professional training & coaching'
}, {
  label: 'Program Development',
  value: 'program development'
}, {
  label: 'Public Policy',
  value: 'public policy'
}, {
  label: 'Public Relations & Communications',
  value: 'public relations & communications'
}, {
  label: 'Public Safety',
  value: 'public safety'
}, {
  label: 'Publishing',
  value: 'publishing'
}, {
  label: 'Railroad Manufacture',
  value: 'railroad manufacture'
}, {
  label: 'Ranching',
  value: 'ranching'
}, {
  label: 'Real Estate',
  value: 'real estate'
}, {
  label: 'Recreational Facilities & Services',
  value: 'recreational facilities & services'
}, {
  label: 'Religious Institutions',
  value: 'religious institutions'
}, {
  label: 'Renewables & Environment',
  value: 'renewables & environment'
}, {
  label: 'Research',
  value: 'research'
}, {
  label: 'Restaurants',
  value: 'restaurants'
}, {
  label: 'Retail',
  value: 'retail'
}, {
  label: 'Security & Investigations',
  value: 'security & investigations'
}, {
  label: 'Semiconductors',
  value: 'semiconductors'
}, {
  label: 'Shipbuilding',
  value: 'shipbuilding'
}, {
  label: 'Sporting Goods',
  value: 'sporting goods'
}, {
  label: 'Sports',
  value: 'sports'
}, {
  label: 'Staffing & Recruiting',
  value: 'staffing & recruiting'
}, {
  label: 'Supermarkets',
  value: 'supermarkets'
}, {
  label: 'Telecommunications',
  value: 'telecommunications'
}, {
  label: 'Textiles',
  value: 'textiles'
}, {
  label: 'Think Tanks',
  value: 'think tanks'
}, {
  label: 'Tobacco',
  value: 'tobacco'
}, {
  label: 'Translation & Localization',
  value: 'translation & localization'
}, {
  label: 'Transportation/Trucking/Railroad',
  value: 'transportation/trucking/railroad'
}, {
  label: 'Utilities',
  value: 'utilities'
}, {
  label: 'Venture Capital & Private Equity',
  value: 'venture capital & private equity'
}, {
  label: 'Veterinary',
  value: 'veterinary'
}, {
  label: 'Warehousing',
  value: 'warehousing'
}, {
  label: 'Wholesale',
  value: 'wholesale'
}, {
  label: 'Wine & Spirits',
  value: 'wine & spirits'
}, {
  label: 'Wireless',
  value: 'wireless'
}, {
  label: 'Writing & Editing',
  value: 'writing & editing'
}]);

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignEmailDetails_vue_vue_type_template_id_39bfc11b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true& */ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true&");
/* harmony import */ var _CampaignEmailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignEmailDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CampaignEmailDetails_vue_vue_type_style_index_0_id_39bfc11b_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss& */ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss&");
/* harmony import */ var _CampaignEmailDetails_vue_vue_type_style_index_1_id_39bfc11b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true& */ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _CampaignEmailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignEmailDetails_vue_vue_type_template_id_39bfc11b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignEmailDetails_vue_vue_type_template_id_39bfc11b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "39bfc11b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignEmailDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_0_id_39bfc11b_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=0&id=39bfc11b&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_0_id_39bfc11b_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_0_id_39bfc11b_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_0_id_39bfc11b_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_0_id_39bfc11b_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_1_id_39bfc11b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=style&index=1&id=39bfc11b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_1_id_39bfc11b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_1_id_39bfc11b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_1_id_39bfc11b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_style_index_1_id_39bfc11b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_template_id_39bfc11b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignEmailDetails.vue?vue&type=template&id=39bfc11b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_template_id_39bfc11b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignEmailDetails_vue_vue_type_template_id_39bfc11b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignNameModal.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignNameModal_vue_vue_type_template_id_45c76f1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignNameModal.vue?vue&type=template&id=45c76f1d& */ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=template&id=45c76f1d&");
/* harmony import */ var _CampaignNameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignNameModal.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CampaignNameModal_vue_vue_type_style_index_0_id_45c76f1d_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss& */ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CampaignNameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignNameModal_vue_vue_type_template_id_45c76f1d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignNameModal_vue_vue_type_template_id_45c76f1d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin-company/CampaignNameModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignNameModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_style_index_0_id_45c76f1d_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=style&index=0&id=45c76f1d&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_style_index_0_id_45c76f1d_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_style_index_0_id_45c76f1d_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_style_index_0_id_45c76f1d_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_style_index_0_id_45c76f1d_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=template&id=45c76f1d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=template&id=45c76f1d& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_template_id_45c76f1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignNameModal.vue?vue&type=template&id=45c76f1d& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignNameModal.vue?vue&type=template&id=45c76f1d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_template_id_45c76f1d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignNameModal_vue_vue_type_template_id_45c76f1d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignTable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignTable.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignTable_vue_vue_type_template_id_26faa0ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true& */ "./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true&");
/* harmony import */ var _CampaignTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignTable.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CampaignTable_vue_vue_type_style_index_0_id_26faa0ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss& */ "./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CampaignTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignTable_vue_vue_type_template_id_26faa0ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignTable_vue_vue_type_template_id_26faa0ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26faa0ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin-company/CampaignTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_style_index_0_id_26faa0ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=style&index=0&id=26faa0ee&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_style_index_0_id_26faa0ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_style_index_0_id_26faa0ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_style_index_0_id_26faa0ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_style_index_0_id_26faa0ee_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_template_id_26faa0ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/CampaignTable.vue?vue&type=template&id=26faa0ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_template_id_26faa0ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignTable_vue_vue_type_template_id_26faa0ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/EmailCampaigns.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/EmailCampaigns.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailCampaigns_vue_vue_type_template_id_10d5ef4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailCampaigns.vue?vue&type=template&id=10d5ef4c& */ "./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=template&id=10d5ef4c&");
/* harmony import */ var _EmailCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailCampaigns.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailCampaigns_vue_vue_type_template_id_10d5ef4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailCampaigns_vue_vue_type_template_id_10d5ef4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/admin-company/EmailCampaigns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCampaigns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCampaigns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=template&id=10d5ef4c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=template&id=10d5ef4c& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCampaigns_vue_vue_type_template_id_10d5ef4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCampaigns.vue?vue&type=template&id=10d5ef4c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/admin-company/EmailCampaigns.vue?vue&type=template&id=10d5ef4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCampaigns_vue_vue_type_template_id_10d5ef4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCampaigns_vue_vue_type_template_id_10d5ef4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=75.js.map