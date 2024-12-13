(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/images/logo/truckpedia-intial-logo.svg */ "./resources/assets/images/logo/truckpedia-intial-logo.svg");
/* harmony import */ var _assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Logo',
  data: function data() {
    return {
      logo: _assets_images_logo_truckpedia_intial_logo_svg__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'the-footer',
  props: {
    classes: {
      type: String
    }
  },
  data: function data() {
    return {
      appName: _config_constants__WEBPACK_IMPORTED_MODULE_0__["default"].appName,
      appURL: _config_constants__WEBPACK_IMPORTED_MODULE_0__["default"].appURL
    };
  },
  computed: {
    currentYear: function currentYear() {
      return new Date().getFullYear();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/core-js/set */ "./node_modules/@babel/runtime/core-js/set.js");
/* harmony import */ var _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Logo_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Logo.vue */ "./resources/js/src/layouts/components/Logo.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../helpers/eventBus */ "./resources/js/src/helpers/eventBus.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");











function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_2___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_6___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Libraries







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CustomSidebar',
  components: {
    Logo: _Logo_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_15__["ChevronRightIcon"],
    Menu: function Menu() {
      return __webpack_require__.e(/*! import() */ 126).then(__webpack_require__.bind(null, /*! @/components/menu/Menu.vue */ "./resources/js/src/components/menu/Menu.vue"));
    },
    SubMenu: function SubMenu() {
      return __webpack_require__.e(/*! import() */ 140).then(__webpack_require__.bind(null, /*! @/components/menu/SubMenu.vue */ "./resources/js/src/components/menu/SubMenu.vue"));
    },
    AutomationPopup: function AutomationPopup() {
      return __webpack_require__.e(/*! import() */ 86).then(__webpack_require__.bind(null, /*! ./AutomationPopup.vue */ "./resources/js/src/layouts/components/customizer/AutomationPopup.vue"));
    },
    DeletePrompt: function DeletePrompt() {
      return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! @/components/prompts/DeletePrompt */ "./resources/js/src/components/prompts/DeletePrompt.vue"));
    },
    MenuShareDialog: function MenuShareDialog() {
      return __webpack_require__.e(/*! import() */ 147).then(__webpack_require__.bind(null, /*! ./components/MenuShareDialog.vue */ "./resources/js/src/layouts/components/customizer/components/MenuShareDialog.vue"));
    },
    MenuNamePrompt: function MenuNamePrompt() {
      return __webpack_require__.e(/*! import() */ 139).then(__webpack_require__.bind(null, /*! @/components/menu/MenuNamePrompt.vue */ "./resources/js/src/components/menu/MenuNamePrompt.vue"));
    },
    ProfileDropDown: function ProfileDropDown() {
      return __webpack_require__.e(/*! import() */ 148).then(__webpack_require__.bind(null, /*! ../navbar/components/ProfileDropDown.vue */ "./resources/js/src/layouts/components/navbar/components/ProfileDropDown.vue"));
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('auth', ['user', 'isTruckpediaUser', 'companyFeatureAccess', 'isUserBrokerOrShipper']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('menuV2', ['getAllMenu', 'getAllSubMenu']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('companyUserV2', ['getAllWebUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])('chat', ['chatList']), {
    filteredNavMenuItems: function filteredNavMenuItems() {
      var _this = this;

      var navItems = _toConsumableArray(this.navMenuItems);

      var restrictedBasicRoutes = ['/invoices', '/planning', '/reports', '/maintenance-v2'];

      if (this.companyFeatureAccess.includes('basic')) {
        navItems = navItems.filter(function (d) {
          return !restrictedBasicRoutes.includes(d.url);
        });
      }

      if (this.companyFeatureAccess.includes('noTms')) {
        navItems = navItems.filter(function (i) {
          return !['home', 'dispatch', 'calendar', 'planning', 'invoices', 'report', 'maintenance', 'driver', 'truck', 'trailer'].includes(i.slug);
        });
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_9___default()(navItems), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.slug == 'marketing') {
            var emailCampaign = this.companyFeatureAccess.includes('marketing');
            var crm = this.companyFeatureAccess.includes('crm');

            if (emailCampaign && !crm) {
              item.children = item.children.filter(function (c) {
                return c.name != 'CRM';
              });
            }
            /* CRM users must be able to use email campaign.
            else if (!emailCampaign && crm) {
              item.children = item.children.filter((c) => c.name == 'CRM');
            }
            */

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

      if (this.user && this.user.admin_company_details) {
        var hideAllTabsExpect = ['home', 'calendar', 'driver', 'truck', 'trailer', 'safety'];

        if (_config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].onlyUseSafetyTab.some(function (item) {
          return item === _this.user.admin_company_details.admin_company_detail_id;
        })) {
          navItems = navItems.filter(function (item) {
            return hideAllTabsExpect.includes(item.slug);
          });
        }
      }

      if (this.isUserBrokerOrShipper) {
        navItems = navItems.filter(function (item) {
          return item.slug !== 'home';
        });
      }

      return navItems.filter(function (item) {
        return _this.showOnCheckEarlyAccess(item);
      });
    },
    currentRoute: function currentRoute() {
      return this.$route.path;
    },
    sidebarToggleIcon: function sidebarToggleIcon() {
      return this.isCollapsed ? 'ArrowRightCircleIcon' : 'ArrowLeftCircleIcon';
    },
    menus: function menus() {
      return this.getAllMenu;
    },
    allUsers: function allUsers() {
      var _this2 = this;

      var userList = this.getAllWebUsersList;
      return userList.map(function (user) {
        if (_this2.menuSharePopup.sharedWith.length) {
          var sharedUser = _this2.menuSharePopup.sharedWith.find(function (shared) {
            return shared.id === user.id;
          });

          if (sharedUser) return sharedUser;
        }

        return {
          id: user.id,
          fullName: user.fullName,
          accessLevel: _this2.accessLevels[0].value
        };
      });
    },
    accessLevels: function accessLevels() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].menuAccessLevels;
    },
    menuNamePromptTitle: function menuNamePromptTitle() {
      return this.menuNamePrompt.type === 'menu' ? 'Rename Menu' : 'Rename Submenu';
    },
    isAnyDialogActive: function isAnyDialogActive() {
      return this.menuPopupActive || this.menuNamePrompt.isActive || this.subMenuPopupActive || this.menuSharePopup.isActive;
    },
    currentUserID: function currentUserID() {
      return this.user && this.user.user_id ? this.user.user_id : null;
    },
    hasUnReadyMessage: function hasUnReadyMessage() {
      var isUnRead = false;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_9___default()(this.chatList), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var chat = _step2.value;

          // ignore opened chat
          if (!this.lastSeenChatIds.includes(chat.chatId)) {
            if (chat.lastMessageUtc && chat.lastSeenUtc && !chat.isCurrentUser) {
              var lastMessageLocal = this.$dayjs.utc(chat.lastMessageUtc).local();
              var lastSeenLocal = this.$dayjs.utc(chat.lastSeenUtc).local();

              if (lastMessageLocal.isAfter(lastSeenLocal)) {
                isUnRead = true;
              }
            }

            if (chat.lastMessageUtc && !chat.lastSeenUtc) {
              isUnRead = true;
            }
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

      return isUnRead;
    },
    hideAutomation: function hideAutomation() {
      return this.isTruckpediaUser || this.user && this.user.role === 'maintenance' || this.companyFeatureAccess.includes('basic') || this.companyFeatureAccess.includes('noTms');
    },
    hideAccountSetting: function hideAccountSetting() {
      return this.user && this.user.role === 'maintenance';
    }
  }),
  props: {
    navMenuItems: {
      required: true,
      type: Array
    }
  },
  data: function data() {
    return {
      isProduction: "development" === 'production',
      isCollapsed: true,
      openAutomationPopup: false,
      customIcons: {
        trailer: __webpack_require__(/*! @assets/images/custom/custom-trailer.svg */ "./resources/assets/images/custom/custom-trailer.svg"),
        safety: __webpack_require__(/*! @assets/images/custom/safety.svg */ "./resources/assets/images/custom/safety.svg"),
        customer: __webpack_require__(/*! @assets/images/custom/handshake.svg */ "./resources/assets/images/custom/handshake.svg"),
        marketingIcon: __webpack_require__(/*! @assets/images/custom/marketing.svg */ "./resources/assets/images/custom/marketing.svg"),
        chartInfoGraphicIcon: __webpack_require__(/*! @assets/images/custom/chartInfoGraphicIcon.svg */ "./resources/assets/images/custom/chartInfoGraphicIcon.svg"),
        ratesListIcon: __webpack_require__(/*! @assets/images/custom/rates.svg */ "./resources/assets/images/custom/rates.svg")
      },
      menuPopupActive: false,
      menuNamePrompt: {
        isActive: false,
        id: null,
        name: '',
        color: ''
      },
      subMenuPopupActive: false,
      selectedMenuId: null,
      menuSharePopup: {
        isActive: false,
        type: null,
        sharedWith: [],
        isPrivate: false
      },
      defaultColor: '#c3c3c3',
      // default light gray color for menu and submenu
      deletePrompt: {
        type: null,
        isActive: false,
        selectedItemID: null,
        selectedItemName: null
      },
      tooltipOptions: {
        content: '',
        container: false,
        show: false,
        classes: 'chat-tooltip'
      },
      lastSeenChatIds: [],
      openSubMenus: {}
    };
  },
  created: function created() {
    var dayjsUtc = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");

    this.$dayjs.extend(dayjsUtc);
    this.init();
    this.$store.dispatch('factoring-company/getAllFactoringCompanies');
  },
  mounted: function mounted() {
    var _this3 = this;

    this.resizeColumWidth();
    this.$nextTick(function () {
      _this3.getChats(true);
    });
    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__["EventBus"].$on(_config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].socketIoEvents.newMessages, this.handleNewChatMessage);
    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__["EventBus"].$on('lastSeenChatId', this.handleLastSeenChat);
  },
  methods: {
    goToChat: function goToChat() {
      this.getChats();
      this.redirectToPath('/chat');
    },
    resizeColumWidth: function resizeColumWidth() {
      var _this4 = this;

      var resizeData = {
        tracking: false,
        startCursorScreenX: null,
        maxWidth: 500,
        minWidth: 70
      };
      document.getElementById('resize-handle').addEventListener('mousedown', function (event) {
        event.preventDefault();
        event.stopPropagation();
        resizeData.startWidth = document.getElementById('sidebar').offsetWidth;
        resizeData.startCursorScreenX = event.screenX;
        resizeData.tracking = true;
      });
      document.addEventListener('mouseup', function (event) {
        if (resizeData.tracking) {
          var cursorScreenXDelta = event.screenX - resizeData.startCursorScreenX;
          var newWidth = Math.min(resizeData.startWidth + cursorScreenXDelta, resizeData.maxWidth);
          newWidth = Math.max(resizeData.minWidth, newWidth);
          var screenWidth = document.body.clientWidth;
          document.getElementById('sidebar').style.width = "".concat(newWidth, "px");
          document.getElementById('content-wrapper').style.width = "".concat(screenWidth - newWidth, "px");

          _this4.$emit('sidebarResize', newWidth);

          if (newWidth > 135) {
            _this4.isCollapsed = false;
          } else {
            _this4.isCollapsed = true;
          }
        }
      });
      document.addEventListener('mouseup', function (event) {
        if (resizeData.tracking) resizeData.tracking = false;
      });
    },
    stringToColor: function stringToColor(string) {
      var saturation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var lightness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
      var hash = 0;

      for (var i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
      }

      return "hsl(".concat(hash % 360, ", ").concat(saturation, "%, ").concat(lightness, "%)");
    },
    showOnEarlyAccess: function showOnEarlyAccess() {
      if (this.user.role !== 'super_admin') {
        return true;
      }

      return false;
    },
    hideForSpecificCompanys: function hideForSpecificCompanys() {
      if (this.user.role === 'super_admin' || this.user.admin_company_details.admin_company_detail_id === _config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].hidefunctionalitiesForSpecificCompanyIds) {
        return true;
      }

      return false;
    },
    showOnCheckEarlyAccess: function showOnCheckEarlyAccess(item) {
      if (this.user.role !== 'super_admin') {
        if (this.user.admin_company_details.admin_company_detail_id === _config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].hidefunctionalitiesForSpecificCompanyIds) {
          if (item.slug === 'invoices' || item.slug === 'customer') {
            return true;
          }

          return false;
        }

        if (item.slug === 'safety') {
          return _config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].showSafetyTab.includes(this.user.admin_company_detail_id) || this.companyFeatureAccess.includes('safety');
        }

        if (item.slug === 'quotes' || item.slug === 'rates') {
          return this.companyFeatureAccess.includes('marketplace');
        }

        if (item.slug === 'marketing') {
          return this.companyFeatureAccess.includes('marketing') || this.companyFeatureAccess.includes('crm');
        }
      }

      return true;
    },
    redirectToPath: function redirectToPath(path) {
      if (path !== this.currentRoute) this.$router.push(path).catch(function () {
        return true;
      });
    },
    toggleSidebar: function toggleSidebar() {
      document.getElementById('sidebar').removeAttribute('style');
      document.getElementById('content-wrapper').removeAttribute('style'); // this.isCollapsed
      //   ? setTimeout(() => {
      //     this.isCollapsed = !this.isCollapsed
      //   }, 100)
      //   : (this.isCollapsed = !this.isCollapsed)

      this.isCollapsed = !this.isCollapsed;
      this.$emit('collapseSidebar');
    },
    toggleAutomationPopup: function toggleAutomationPopup() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.openAutomationPopup = val === null ? !this.openAutomationPopup : val;
    },
    toggleSubModuleMenu: function toggleSubModuleMenu(index) {
      this.$set(this.openSubMenus, index, !this.openSubMenus[index]);
    },
    isSubMenuOpen: function isSubMenuOpen(index) {
      return !!this.openSubMenus[index];
    },
    getErrorMsg: function getErrorMsg(error) {
      return error && error.response && error.response.data && error.response.data.message ? error.response.data.message : 'Something went wrong';
    },
    fetchMenus: function () {
      var _fetchMenus = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('menuV2/fetchMenuList');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchMenus() {
        return _fetchMenus.apply(this, arguments);
      };
    }(),
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.$vs.loading();
                _context2.next = 4;
                return this.fetchMenus();

              case 4:
                _context2.next = 6;
                return this.$store.dispatch('companyUserV2/fetchAllWebUsers');

              case 6:
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context2.t0)
                });

              case 11:
                _context2.prev = 11;
                this.$vs.loading.close();
                return _context2.finish(11);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8, 11, 14]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    toggleMenuPopup: function toggleMenuPopup() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.menuPopupActive = val === null ? !this.menuPopupActive : val;
    },
    getFirstLetter: function getFirstLetter(name) {
      return name.trim().charAt(0);
    },
    toggleSubMenu: function toggleSubMenu(index) {
      var menus = this.menus.map(function (menu, i) {
        return _objectSpread({}, menu, {
          isOpen: i === index ? !menu.isOpen : false
        });
      });
      this.$store.commit('menuV2/setAllMenu', menus);
    },
    toggleRenameMenuPrompt: function toggleRenameMenuPrompt() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'menu';
      var menu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.menuNamePrompt = _objectSpread({}, menu, {
        type: type,
        isActive: true
      });
    },
    closeRenameMenuPrompt: function closeRenameMenuPrompt() {
      this.menuNamePrompt = {
        isActive: false,
        id: null,
        menuId: null,
        name: '',
        color: ''
      };
    },
    renameMenu: function () {
      var _renameMenu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee3(_ref) {
        var name, color, _this$menuNamePrompt, id, type, menuId, oldColor, payload, updatedSubmenu, menus;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = _ref.name, color = _ref.color;
                _context3.prev = 1;
                _this$menuNamePrompt = this.menuNamePrompt, id = _this$menuNamePrompt.id, type = _this$menuNamePrompt.type, menuId = _this$menuNamePrompt.menuId, oldColor = _this$menuNamePrompt.color;
                payload = {
                  id: id,
                  name: name,
                  color: oldColor !== color ? color : oldColor
                };
                this.closeRenameMenuPrompt();

                if (!(type === 'menu')) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 8;
                return this.$store.dispatch('menuV2/updateMenu', payload);

              case 8:
                _context3.next = 10;
                return this.$store.dispatch('menuV2/fetchMenuList');

              case 10:
                _context3.next = 18;
                break;

              case 12:
                _context3.next = 14;
                return this.$store.dispatch('menuV2/updateSubMenu', payload);

              case 14:
                _context3.next = 16;
                return this.$store.dispatch('menuV2/fetchSubMenuList', menuId);

              case 16:
                updatedSubmenu = this.getAllSubMenu.find(function (submenu) {
                  return submenu.id === id;
                });

                if (updatedSubmenu) {
                  menus = this.menus.map(function (menu) {
                    return _objectSpread({}, menu, {
                      subMenus: menu.subMenus.map(function (submenu) {
                        if (submenu.id === id) {
                          return updatedSubmenu;
                        }

                        return submenu;
                      })
                    });
                  });
                  this.$store.commit('menuV2/setAllMenu', menus);
                }

              case 18:
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context3.t0)
                });

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 20]]);
      }));

      return function renameMenu(_x) {
        return _renameMenu.apply(this, arguments);
      };
    }(),
    onMenuSubmit: function () {
      var _onMenuSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee4(menu) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.toggleMenuPopup(false);
                payload = {
                  name: menu.name,
                  sharedPermissions: menu.sharedPermissions || [],
                  color: menu.color,
                  submenus: [{
                    name: 'whiteboard',
                    predefinedData: '',
                    views: menu.views.map(function (view) {
                      return {
                        name: view,
                        type: view.toLowerCase()
                      };
                    })
                  }]
                };
                _context4.next = 5;
                return this.$store.dispatch('menuV2/createMenu', payload);

              case 5:
                _context4.next = 7;
                return this.fetchMenus();

              case 7:
                this.$vs.notify({
                  time: 8000,
                  color: 'success',
                  text: 'Menu created successfully'
                });
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context4.t0)
                });

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
      }));

      return function onMenuSubmit(_x2) {
        return _onMenuSubmit.apply(this, arguments);
      };
    }(),
    toggleSubMenuPopup: function toggleSubMenuPopup() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var menuId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.selectedMenuId = menuId;
      this.subMenuPopupActive = val === null ? !this.subMenuPopupActive : val;
    },
    onSubMenuSubmit: function () {
      var _onSubMenuSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee5(subMenu) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                payload = _objectSpread({
                  menuId: this.selectedMenuId
                }, subMenu);
                this.toggleSubMenuPopup(false);
                _context5.next = 5;
                return this.$store.dispatch('menuV2/createSubMenu', payload);

              case 5:
                _context5.next = 7;
                return this.fetchMenus();

              case 7:
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context5.t0)
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 9]]);
      }));

      return function onSubMenuSubmit(_x3) {
        return _onSubMenuSubmit.apply(this, arguments);
      };
    }(),
    fetchMenuSharedPermissions: function () {
      var _fetchMenuSharedPermissions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee6() {
        var _this5 = this;

        var _ref2, sharedPermissions;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.$store.dispatch('menuV2/fetchMenuSharedPermissions', this.selectedMenuId);

              case 3:
                _ref2 = _context6.sent;
                sharedPermissions = _ref2.data.payload.sharedPermissions;

                if (sharedPermissions && sharedPermissions.length) {
                  this.menuSharePopup.sharedWith = sharedPermissions.map(function (permission) {
                    var user = _this5.allUsers.find(function (user) {
                      return user.id === permission.userId;
                    });

                    return _objectSpread({}, user, {
                      accessLevel: permission.accessLevel
                    });
                  });
                }

                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context6.t0)
                });

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      return function fetchMenuSharedPermissions() {
        return _fetchMenuSharedPermissions.apply(this, arguments);
      };
    }(),
    fetchSubMenuSharedPermissions: function () {
      var _fetchSubMenuSharedPermissions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee7() {
        var _this6 = this;

        var _ref3, _ref3$data$payload, sharedPermissions, isPrivate;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return this.$store.dispatch('menuV2/fetchSubMenuSharedPermissions', this.selectedMenuId);

              case 3:
                _ref3 = _context7.sent;
                _ref3$data$payload = _ref3.data.payload;
                sharedPermissions = _ref3$data$payload.sharedPermissions;
                isPrivate = _ref3$data$payload.isPrivate;
                this.menuSharePopup.isPrivate = isPrivate;

                if (sharedPermissions && sharedPermissions.length) {
                  this.menuSharePopup.sharedWith = sharedPermissions.map(function (permission) {
                    var user = _this6.allUsers.find(function (user) {
                      return user.id === permission.userId;
                    });

                    return _objectSpread({}, user, {
                      accessLevel: permission.accessLevel
                    });
                  });
                }

                _context7.next = 14;
                break;

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context7.t0)
                });

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 11]]);
      }));

      return function fetchSubMenuSharedPermissions() {
        return _fetchSubMenuSharedPermissions.apply(this, arguments);
      };
    }(),
    toggleMenuSharePopup: function () {
      var _toggleMenuSharePopup = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee8() {
        var type,
            menuId,
            _args8 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                type = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : 'menu';
                menuId = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : null;
                this.selectedMenuId = menuId;

                if (!(type === 'menu')) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 6;
                return this.fetchMenuSharedPermissions();

              case 6:
                _context8.next = 11;
                break;

              case 8:
                if (!(type === 'subMenu')) {
                  _context8.next = 11;
                  break;
                }

                _context8.next = 11;
                return this.fetchSubMenuSharedPermissions();

              case 11:
                this.menuSharePopup = _objectSpread({}, this.menuSharePopup, {
                  isActive: !this.menuSharePopup.isActive,
                  type: type
                });

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function toggleMenuSharePopup() {
        return _toggleMenuSharePopup.apply(this, arguments);
      };
    }(),
    closeMenuSharePopup: function closeMenuSharePopup() {
      this.selectedMenuId = null;
      this.menuSharePopup = {
        isActive: false,
        type: 'menu',
        sharedWith: [],
        isPrivate: false
      };
    },
    updateSharePermissions: function () {
      var _updateSharePermissions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee9(_ref4) {
        var isPrivate, sharedPermissions, _this$menuSharePopup, type, sharedWith, payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                isPrivate = _ref4.isPrivate, sharedPermissions = _ref4.sharedPermissions;
                _context9.prev = 1;
                _this$menuSharePopup = this.menuSharePopup, type = _this$menuSharePopup.type, sharedWith = _this$menuSharePopup.sharedWith;

                if (!(Object(lodash__WEBPACK_IMPORTED_MODULE_13__["isEqual"])(sharedWith, sharedPermissions) && isPrivate === this.menuSharePopup.isPrivate)) {
                  _context9.next = 6;
                  break;
                }

                this.closeMenuSharePopup();
                return _context9.abrupt("return");

              case 6:
                payload = {
                  id: this.selectedMenuId,
                  sharedPermissions: sharedPermissions.map(function (user) {
                    return {
                      userId: user.id,
                      accessLevel: user.accessLevel
                    };
                  })
                };

                if (!(type === 'menu')) {
                  _context9.next = 12;
                  break;
                }

                _context9.next = 10;
                return this.$store.dispatch('menuV2/changeMenuSharedPermissions', payload);

              case 10:
                _context9.next = 15;
                break;

              case 12:
                payload.isPrivate = isPrivate;
                _context9.next = 15;
                return this.$store.dispatch('menuV2/updateSubMenuPermissions', payload);

              case 15:
                this.closeMenuSharePopup();
                _context9.next = 21;
                break;

              case 18:
                _context9.prev = 18;
                _context9.t0 = _context9["catch"](1);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context9.t0)
                });

              case 21:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 18]]);
      }));

      return function updateSharePermissions(_x4) {
        return _updateSharePermissions.apply(this, arguments);
      };
    }(),
    isOwner: function isOwner(id) {
      return id === this.currentUserID;
    },
    deleteMenu: function () {
      var _deleteMenu = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee10(menuId) {
        var currentMenuIndex, menu, nextMenuID, nextSubMenuID;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return this.$store.dispatch('menuV2/deleteMenu', menuId);

              case 3:
                this.$vs.notify({
                  time: 4000,
                  color: 'success',
                  text: 'Menu deleted successfully'
                });

                if (this.$route.name === 'MenuView') {
                  currentMenuIndex = this.menus.findIndex(function (menu) {
                    return menu.id === menuId;
                  });

                  if (currentMenuIndex !== -1 && (this.menus[currentMenuIndex + 1] || this.menus[currentMenuIndex - 1])) {
                    menu = this.menus[currentMenuIndex + 1] || this.menus[currentMenuIndex - 1];
                    nextMenuID = menu.id;
                    nextSubMenuID = menu.subMenus[0].id;
                    this.redirectToPath("/menu-view/".concat(nextMenuID, "/").concat(nextSubMenuID));
                  } else this.$router.push({
                    name: 'home'
                  });
                }

                _context10.next = 7;
                return this.fetchMenus();

              case 7:
                _context10.next = 12;
                break;

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: this.getErrorMsg(_context10.t0)
                });

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 9]]);
      }));

      return function deleteMenu(_x5) {
        return _deleteMenu.apply(this, arguments);
      };
    }(),
    initDeletePrompt: function initDeletePrompt(type, id, name) {
      this.deletePrompt.type = type;
      this.deletePrompt.isActive = true;
      this.deletePrompt.selectedItemID = id;
      this.deletePrompt.selectedItemName = name;
    },
    deleteRecord: function () {
      var _deleteRecord = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (!(this.deletePrompt.type === 'menu')) {
                  _context11.next = 3;
                  break;
                }

                _context11.next = 3;
                return this.deleteMenu(this.deletePrompt.selectedItemID);

              case 3:
                this.closeDeletePrompt();

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function deleteRecord() {
        return _deleteRecord.apply(this, arguments);
      };
    }(),
    closeDeletePrompt: function closeDeletePrompt() {
      this.deletePrompt.type = null;
      this.deletePrompt.isActive = false;
      this.deletePrompt.selectedItemID = null;
      this.deletePrompt.selectedItemName = null;
    },
    clearPopup: Object(lodash__WEBPACK_IMPORTED_MODULE_13__["debounce"])(function () {
      this.tooltipOptions.content = '';
      this.tooltipOptions.show = false;
    }, 8000),
    handleNewChatMessage: function () {
      var _handleNewChatMessage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee12(chat) {
        var message, openChatId, senderFullName;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                message = chat.messages[0];
                openChatId = sessionStorage.getItem('openChatId') || ''; // mark unread on new message

                if (openChatId.toString() !== chat.chat.chatId.toString()) {
                  this.lastSeenChatIds = this.lastSeenChatIds.filter(function (e) {
                    return e !== chat.chat.chatId;
                  });
                }

                if (!(this.currentUserID.toString() === message.senderUserId.toString() || openChatId.toString() === chat.chat.chatId.toString())) {
                  _context12.next = 5;
                  break;
                }

                return _context12.abrupt("return");

              case 5:
                // TOOD: Show multiple poopup for new message without overlapping
                senderFullName = "".concat(message.senderFirstName, " ").concat(message.senderLastName);

                if (message.textMessage) {
                  this.tooltipOptions.content = "".concat(senderFullName, ": ").concat(message.textMessage);
                } else {
                  this.tooltipOptions.content = "".concat(senderFullName, ": Sent an attachment");
                }

                this.tooltipOptions.show = true; // clear popup after 8 sec

                this.clearPopup();

                if (!this.isChatAlreadyExists(chat.chat.chatId)) {
                  _context12.next = 13;
                  break;
                }

                // update existing chat using socket.io data
                this.$store.commit('chat/UPDATE_CHAT_LAST_MSG_DATE_TIME', {
                  chatId: chat.chat.chatId,
                  lastMessageUtc: chat.messages[0].createdAt
                });
                _context12.next = 16;
                break;

              case 13:
                _context12.next = 15;
                return this.getChats();

              case 15:
                this.$forceUpdate();

              case 16:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function handleNewChatMessage(_x6) {
        return _handleNewChatMessage.apply(this, arguments);
      };
    }(),
    getChats: function () {
      var _getChats = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee13() {
        var checkForIntercompanyChatParams,
            _args13 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                checkForIntercompanyChatParams = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : false;
                _context13.next = 3;
                return this.$store.dispatch('chat/getChats');

              case 3:
                if (!checkForIntercompanyChatParams) {
                  _context13.next = 6;
                  break;
                }

                _context13.next = 6;
                return this.setDefaultIntercompanyChat();

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function getChats() {
        return _getChats.apply(this, arguments);
      };
    }(),
    handleLastSeenChat: function handleLastSeenChat(chatId) {
      this.lastSeenChatIds = _toConsumableArray(new _babel_runtime_core_js_set__WEBPACK_IMPORTED_MODULE_7___default.a(_toConsumableArray(this.lastSeenChatIds).concat([chatId])));
    },
    isChatAlreadyExists: function isChatAlreadyExists(chatId) {
      return this.chatList.filter(function (chat) {
        return chat.chatId === chatId;
      }).length;
    },
    intercompanyChatById: function intercompanyChatById(companyId) {
      return this.chatList.find(function (chat) {
        return chat.chatType === 'intercompany' && chat.intercompanyData.otherCompanyId == companyId;
      });
    },
    setDefaultIntercompanyChat: function () {
      var _setDefaultIntercompanyChat = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee14() {
        var _this$$route$query, otherCompanyId, type, chat, payload, messages, foundChat, _chat;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.prev = 0;
                _this$$route$query = this.$route.query, otherCompanyId = _this$$route$query.otherCompanyId, type = _this$$route$query.type;

                if (!(otherCompanyId && type === 'intercompany')) {
                  _context14.next = 16;
                  break;
                }

                chat = this.intercompanyChatById(otherCompanyId);

                if (!chat) {
                  _context14.next = 8;
                  break;
                }

                _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__["EventBus"].$emit('openIntercompanyChat', chat);
                _context14.next = 15;
                break;

              case 8:
                // Create new chat
                payload = {
                  needChatMetaData: true,
                  page: 1,
                  pageSize: 50,
                  queryChatType: 'intercompany',
                  otherCompanyId: Number(otherCompanyId)
                };
                _context14.next = 11;
                return this.$store.dispatch('chat/getMessages', payload);

              case 11:
                messages = _context14.sent;

                if (messages.chat) {
                  foundChat = this.chatList.find(function (chat) {
                    return chat.id === messages.chat.chatId;
                  });

                  if (!foundChat) {
                    this.$store.commit('chat/ADD_TO_CHAT_LIST', messages.chat);
                  }
                }

                _chat = this.intercompanyChatById(otherCompanyId);

                if (_chat) {
                  _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__["EventBus"].$emit('openIntercompanyChat', _chat);
                }

              case 15:
                // clear query params
                this.$router.replace({
                  query: {}
                });

              case 16:
                _context14.next = 21;
                break;

              case 18:
                _context14.prev = 18;
                _context14.t0 = _context14["catch"](0);
                console.log(_context14.t0, 'error');

              case 21:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[0, 18]]);
      }));

      return function setDefaultIntercompanyChat() {
        return _setDefaultIntercompanyChat.apply(this, arguments);
      };
    }()
  },
  beforeDestroy: function beforeDestroy() {
    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__["EventBus"].$off(_config_constants__WEBPACK_IMPORTED_MODULE_12__["default"].socketIoEvents.newMessages);
    _helpers_eventBus__WEBPACK_IMPORTED_MODULE_14__["EventBus"].$off('lastSeenChatId');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config/constants */ "./resources/js/src/config/constants.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
/* harmony import */ var _layouts_components_vertical_nav_menu_navMenuItems_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/layouts/components/vertical-nav-menu/navMenuItems.js */ "./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js");
/* harmony import */ var _layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/layouts/components/TheFooter.vue */ "./resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/../themeConfig.js */ "./resources/js/themeConfig.js");
/* harmony import */ var _components_customizer_CustomSidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/customizer/CustomSidebar */ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import IdleTimer from "@/helpers/IdleTimer.js";






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_8__["default"],
    TheFooter: _layouts_components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    CustomSidebar: _components_customizer_CustomSidebar__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  data: function data() {
    return {
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_11__["default"].footerType || "static",
      hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_11__["default"].hideScrollToTop,
      isNavbarDark: false,
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_11__["default"].navbarColor || "#fff",
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_11__["default"].navbarType || "floating",
      navMenuItems: [],
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_11__["default"].routerTransition || "none",
      routeTitle: this.$route.meta.pageTitle,
      // AutoLogout
      idleUserTime: _config_constants__WEBPACK_IMPORTED_MODULE_7__["default"].idle_user_time,
      isAutoLogout: false,
      timer: null,
      isCollapsed: true,
      resizeableWidth: null
    };
  },
  watch: {
    $route: function $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    resizeableWidth: {
      handler: function handler() {
        if (this.resizeableWidth > 135) {
          this.isCollapsed = false;
        } else {
          this.isCollapsed = true;
        }
      }
    },
    isThemeDark: function isThemeDark(val) {
      var color = this.navbarColor === "#fff" && val ? "#10163a" : "#fff";
      this.updateNavbarColor(color);
    },
    "$store.state.mainLayoutType": function $storeStateMainLayoutType(val) {
      this.setNavMenuVisibility(val);
    },
    isAutoLogout: function isAutoLogout(newValue) {
      if (newValue) {
        this.logOut();
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])("auth", ["userRole", "user", "isUserBrokerOrShipper"]), {
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass: function contentAreaClass() {
      if (this.mainLayoutType === "vertical") {
        if (this.verticalNavMenuWidth === "default") return "content-area-reduced";else if (this.verticalNavMenuWidth === "reduced") return "content-area-lg";else return "content-area-full";
      } else return "content-area-full";
    },
    footerClasses: function footerClasses() {
      return {
        "footer-hidden": this.footerType === "hidden",
        "footer-sticky": this.footerType === "sticky",
        "footer-static": this.footerType === "static"
      };
    },
    isAppPage: function isAppPage() {
      return this.$route.meta.no_scroll;
    },
    isThemeDark: function isThemeDark() {
      return this.$store.state.theme === "dark";
    },
    layoutTypeClass: function layoutTypeClass() {
      return "main-".concat(this.mainLayoutType);
    },
    mainLayoutType: function mainLayoutType() {
      return this.$store.state.mainLayoutType;
    },
    navbarClasses: function navbarClasses() {
      return {
        "navbar-hidden": this.navbarType === "hidden",
        "navbar-sticky": this.navbarType === "sticky",
        "navbar-static": this.navbarType === "static",
        "navbar-floating": this.navbarType === "floating"
      };
    },
    verticalNavMenuWidth: function verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth: function windowWidth() {
      return this.$store.state.windowWidth;
    },
    backToTopSpaceFromBottom: function backToTopSpaceFromBottom() {
      var currentRouteName = this.$route.name;
      var modifiedRoutes = ["drivers-edit", "drivers-add", "UpdateTrailer", "CreateTrailer", "UpdateTrucks", "CreateTrucks"];

      if (modifiedRoutes.includes(currentRouteName)) {
        return "15%";
      }

      return "5%";
    },
    contentWrapperWidth: function contentWrapperWidth() {
      if (this.resizeableWidth) return {
        width: "calc(100% - ".concat(this.resizeableWidth, "px)")
      };
      return {
        width: "calc(100% - 70px)"
      };
    },
    navMenuItemsList: function navMenuItemsList() {
      if (this.isUserBrokerOrShipper) {
        return this.navMenuItems.map(function (item) {
          if (item.slug === "dispatch") {
            return _objectSpread({}, item, {
              name: "Shipment"
            });
          } else if (item.slug === "calendar") {
            return _objectSpread({}, item, {
              name: "Tracking Map"
            });
          }

          return item;
        });
      } else return this.navMenuItems;
    }
  }),
  methods: {
    sidebarResize: function sidebarResize(width) {
      this.resizeableWidth = width;
    },
    changeRouteTitle: function changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbarColor: function updateNavbarColor(val) {
      this.navbarColor = val;
      if (val === "#fff") this.isNavbarDark = false;else this.isNavbarDark = true;
    },
    setNavMenuVisibility: function setNavMenuVisibility(layoutType) {
      if (layoutType === "horizontal" && this.windowWidth >= 1200 || layoutType === "vertical" && this.windowWidth < 1200) {
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
        this.$store.dispatch("updateVerticalNavMenuWidth", "no-nav-menu");
      } else {
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
      }
    },
    // Auto Logout

    /*storageChange() {
      const expiredTime = localStorage.getItem("_expiredTime");
        if (!expiredTime) {
        this.logOut();
      }
    },*/
    logOut: function () {
      var _logOut = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$store.dispatch("auth/logout").catch(function () {});
                _context.next = 3;
                return this.$store.dispatch("auth/logoutLocally");

              case 3:
                _context.next = 5;
                return this.$router.push({
                  name: "page-login"
                }).catch(function () {});

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function logOut() {
        return _logOut.apply(this, arguments);
      };
    }()
  },
  created: function created() {
    var color = this.navbarColor === "#fff" && this.isThemeDark ? "#10163a" : this.navbarColor;
    this.updateNavbarColor(color);
    this.setNavMenuVisibility(this.$store.state.mainLayoutType); // Get Auth User's Navbar Items

    if (this.isUserBrokerOrShipper) {
      this.navMenuItems = _layouts_components_vertical_nav_menu_navMenuItems_js__WEBPACK_IMPORTED_MODULE_9__["default"]["shipperBroker"];
    } else {
      this.navMenuItems = _layouts_components_vertical_nav_menu_navMenuItems_js__WEBPACK_IMPORTED_MODULE_9__["default"][this.userRole];
    } //this.timer = null;

    /*new IdleTimer({
      timeout: this.idleUserTime,
      onTimeout: () => {
        if (this.isAutoLogout) {
          this.logOut();
        }
        this.isAutoLogout = true;
        // this.timer.cleanUp()
      },
      onExpired: () => {
        if (this.isAutoLogout) {
          this.logOut();
        }
        this.isAutoLogout = true;
        this.timer.cleanUp();
      },
    });*/
    // Auto Logout
    // window.addEventListener("storage", this.storageChange);

  },
  // updated () {
  //   // eslint-disable-next-line no-unused-expressions
  //   this.timer
  // },
  beforeDestroy: function beforeDestroy() {
    this.timer = null;
    this.isAutoLogout = false; // localStorage.removeItem("_expiredTime");
    // window.removeEventListener("storage", this.storageChange);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("img", {
    staticClass: "fill-current text-primary",
    attrs: {
      src: _vm.logo,
      alt: "logo"
    }
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
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

  return _c("footer", {
    staticClass: "the-footer flex-wrap justify-between",
    class: _vm.classes
  }, [_c("p", [_c("span", [_vm._v("COPYRIGHT ©")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.currentYear) + " ")]), _vm._v(" "), _c("a", {
    attrs: {
      href: _vm.appURL,
      target: "_blank",
      rel: "nofollow"
    }
  }, [_vm._v(_vm._s(_vm.appName))]), _vm._v(" "), _c("span", {
    staticClass: "hidden sm:inline-block"
  }, [_vm._v(", All rights Reserved")])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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

var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    class: ["side-bar", _vm.isCollapsed ? "compress-width" : "expand-width"],
    attrs: {
      id: "sidebar"
    }
  }, [_c("div", {
    staticClass: "resize-handle",
    attrs: {
      id: "resize-handle"
    }
  }), _vm._v(" "), _c("div", {
    class: [!_vm.isCollapsed ? "m-2" : "my-2"]
  }, [_vm.isTruckpediaUser ? _c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isCollapsed,
      expression: "isCollapsed"
    }],
    staticClass: "h-7 w-auto align-middle",
    attrs: {
      src: __webpack_require__(/*! @assets/images/logo/truckpedia-intial-logo.svg */ "./resources/assets/images/logo/truckpedia-intial-logo.svg"),
      alt: "logo app"
    }
  }), _vm._v(" "), _c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isCollapsed,
      expression: "!isCollapsed"
    }],
    staticClass: "h-7 w-auto align-middle",
    attrs: {
      src: __webpack_require__(/*! @assets/images/logo/truckpedia-full-logo.svg */ "./resources/assets/images/logo/truckpedia-full-logo.svg"),
      alt: "logo app"
    }
  })]) : _c("div", {
    staticClass: "text-center"
  }, [_c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isCollapsed,
      expression: "isCollapsed"
    }],
    staticClass: "h-7 w-auto align-middle",
    attrs: {
      src: __webpack_require__(/*! @assets/images/logo/truckpedia-intial-logo.svg */ "./resources/assets/images/logo/truckpedia-intial-logo.svg"),
      alt: "logo app"
    }
  }), _vm._v(" "), _c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isCollapsed,
      expression: "!isCollapsed"
    }],
    staticClass: "h-7 w-auto align-middle",
    attrs: {
      src: __webpack_require__(/*! @assets/images/logo/truckpedia-tms-full-logo.svg */ "./resources/assets/images/logo/truckpedia-tms-full-logo.svg"),
      alt: "logo app"
    }
  })])]), _vm._v(" "), _c("vs-divider", {
    staticClass: "my-2"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col justify-between overflow-x-auto",
    style: _vm.isCollapsed ? "height: calc(100% - 55px)" : "height: calc(100% - 115px)"
  }, [_c("ul", {
    staticClass: "features-list"
  }, [_vm._l(_vm.filteredNavMenuItems, function (item, index) {
    return _c("li", {
      key: index,
      class: ["list-item", "w-full", "h-auto", "items-start", item.children && item.children.length ? "flex flex-col" : ""]
    }, [_c("div", {
      class: ["list-item-wrapper ml-2", {
        "text-primary": item.url.length > 1 ? _vm.currentRoute.includes(item.url) : _vm.currentRoute === item.url
      }],
      on: {
        click: function click($event) {
          item.children && item.children.length ? _vm.toggleSubModuleMenu(index) : _vm.redirectToPath(item.url);
        }
      }
    }, [_vm.isCollapsed && item.children && item.children.length ? _c("vs-dropdown", {
      staticClass: "cursor-pointer",
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      }
    }, [_c("div", {
      staticClass: "list-icon mt-auto"
    }, [item.icon ? _c("feather-icon", {
      attrs: {
        icon: item.icon,
        title: _vm.isCollapsed ? item.name : ""
      }
    }) : item.customIcon ? _c("img", {
      staticClass: "height-24px w-auto align-middle custom-icon",
      attrs: {
        src: _vm.customIcons[item.customIcon],
        alt: item.name
      }
    }) : _vm._e()], 1), _vm._v(" "), item.children && item.children.length ? _c("vs-dropdown-menu", _vm._l(item.children, function (subItem, subIndex) {
      return _c("div", {
        key: subIndex,
        staticClass: "m-2"
      }, [_c("label", {
        class: ["text-sm cursor-pointer", {
          "text-primary": subItem.url.length > 1 ? _vm.currentRoute.includes(subItem.url) : _vm.currentRoute === subItem.url
        }],
        on: {
          click: function click($event) {
            return _vm.redirectToPath(subItem.url);
          }
        }
      }, [_vm._v("\n                    " + _vm._s(subItem.name) + "\n                  ")])]);
    }), 0) : _vm._e()], 1) : _c("div", {
      staticClass: "list-item-wrapper"
    }, [_c("div", {
      staticClass: "list-icon mt-auto"
    }, [item.icon ? _c("feather-icon", {
      attrs: {
        icon: item.icon,
        title: _vm.isCollapsed ? item.name : ""
      }
    }) : item.customIcon ? _c("img", {
      staticClass: "height-24px w-auto align-middle custom-icon",
      attrs: {
        src: _vm.customIcons[item.customIcon],
        alt: item.name
      }
    }) : _vm._e()], 1), _vm._v(" "), _c("div", {
      staticClass: "list-label"
    }, [_c("label", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isCollapsed,
        expression: "!isCollapsed"
      }],
      staticClass: "cursor-pointer"
    }, [_vm._v("\n                  " + _vm._s(item.name) + "\n                ")])])])], 1), _vm._v(" "), _vm.isSubMenuOpen(index) && !_vm.isCollapsed ? _c("ul", {
      staticClass: "w-full"
    }, _vm._l(item.children, function (subItem, subIndex) {
      return _c("li", {
        key: "sub-".concat(subIndex),
        class: ["sub-menu", {
          "pl-5": !_vm.isCollapsed
        }]
      }, [_c("div", {
        class: ["list-item-wrapper ml-2", {
          "text-primary": subItem.url.length > 1 ? _vm.currentRoute.includes(subItem.url) : _vm.currentRoute === subItem.url
        }],
        on: {
          click: function click($event) {
            return _vm.redirectToPath(subItem.url);
          }
        }
      }, [_c("div", {
        staticClass: "list-icon mt-auto"
      }, [subItem.icon ? _c("feather-icon", {
        attrs: {
          icon: subItem.icon,
          title: _vm.isCollapsed ? subItem.name : ""
        }
      }) : subItem.customIcon ? _c("img", {
        staticClass: "height-24px w-auto align-middle custom-icon",
        attrs: {
          src: _vm.customIcons[subItem.customIcon],
          alt: subItem.name
        }
      }) : _vm._e()], 1), _vm._v(" "), _c("div", {
        staticClass: "list-label",
        class: {
          "mt-2": subItem.name === "CRM"
        }
      }, [_c("label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !_vm.isCollapsed,
          expression: "!isCollapsed"
        }],
        staticClass: "cursor-pointer"
      }, [_vm._v("\n                    " + _vm._s(subItem.name) + "\n                  ")])])])]);
    }), 0) : _vm._e()]);
  }), _vm._v(" "), _vm.showOnEarlyAccess() ? _c("li", [_c("vs-divider"), _vm._v(" "), _c("div", {
    class: ["mt-2", {
      "pl-3": _vm.isCollapsed
    }]
  }, [_c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isCollapsed && !this.companyFeatureAccess.includes("basic") && !this.companyFeatureAccess.includes("noTms"),
      expression: "\n                isCollapsed &&\n                !this.companyFeatureAccess.includes('basic') &&\n                !this.companyFeatureAccess.includes('noTms')\n              "
    }],
    staticClass: "new-menu-btn small-menu-btn pl-1",
    attrs: {
      size: "small",
      color: "primary",
      type: "border",
      icon: "add"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenuPopup(null);
      }
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "add"
    }
  })], 1), _vm._v(" "), _c("button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isCollapsed && !this.companyFeatureAccess.includes("basic") && !this.companyFeatureAccess.includes("noTms"),
      expression: "\n                !isCollapsed &&\n                !this.companyFeatureAccess.includes('basic') &&\n                !this.companyFeatureAccess.includes('noTms')\n              "
    }],
    staticClass: "new-menu-btn",
    attrs: {
      size: "small",
      color: "primary",
      type: "border",
      icon: "add"
    },
    on: {
      click: function click($event) {
        return _vm.toggleMenuPopup(null);
      }
    }
  }, [_c("vs-icon", {
    attrs: {
      icon: "add"
    }
  }), _vm._v(" NEW MENU\n            ")], 1), _vm._v(" "), _vm.menus && _vm.menus.length > 0 ? _c("div", _vm._l(_vm.menus, function (menu, index) {
    return _c("div", {
      key: index
    }, [_c("div", {
      staticClass: "menu"
    }, [_c("div", {
      staticClass: "w-full flex items-center justify-between"
    }, [_c("div", {
      class: ["flex items-center", {
        "bg-active": menu.isOpen && !_vm.isCollapsed
      }]
    }, [_c("vs-icon", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isCollapsed,
        expression: "!isCollapsed"
      }],
      staticClass: "show-on-menu-hover expand-icon",
      attrs: {
        icon: menu.isOpen ? "arrow_drop_down" : "arrow_right"
      },
      on: {
        click: function click($event) {
          return _vm.toggleSubMenu(index);
        }
      }
    }), _vm._v(" "), _c("vs-avatar", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isCollapsed,
        expression: "!isCollapsed"
      }],
      class: ["cursor-default avatar-size", {
        "m-1": _vm.isCollapsed
      }],
      attrs: {
        color: menu.color || _vm.defaultColor,
        icon: menu.avatarIcon,
        text: menu.avatarIcon ? "" : _vm.getFirstLetter(menu.name)
      }
    }), _vm._v(" "), _c("vs-dropdown", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isCollapsed,
        expression: "isCollapsed"
      }],
      staticClass: "cursor-pointer",
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      }
    }, [_c("vs-avatar", {
      staticClass: "cursor-default avatar-size ml-5px",
      attrs: {
        color: menu.color || _vm.defaultColor,
        icon: menu.avatarIcon,
        text: menu.avatarIcon ? "" : _vm.getFirstLetter(menu.name)
      }
    }), _vm._v(" "), menu.subMenus && menu.subMenus.length ? _c("vs-dropdown-menu", _vm._l(menu.subMenus, function (subMenu, idx) {
      return _c("div", {
        key: idx,
        staticClass: "m-2"
      }, [_c("label", {
        class: ["text-sm", _vm.currentRoute === "/menu-view/".concat(menu.id, "/").concat(subMenu.id) ? "text-primary" : "cursor-pointer"],
        on: {
          click: function click($event) {
            $event.stopPropagation();
            return _vm.redirectToPath("/menu-view/".concat(menu.id, "/").concat(subMenu.id));
          }
        }
      }, [_vm._v("\n                              " + _vm._s(subMenu.name) + "\n                            ")])]);
    }), 0) : _vm._e()], 1), _vm._v(" "), _c("label", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isCollapsed,
        expression: "!isCollapsed"
      }],
      staticClass: "ml-1 font-normal cursor-pointer",
      staticStyle: {
        "font-size": "13px"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.toggleSubMenu(index);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(menu.name) + "\n                      ")])], 1), _vm._v(" "), !_vm.isAnyDialogActive ? _c("vs-dropdown", {
      staticClass: "cursor-pointer show-on-menu-hover custom-sub-menu-dropdown",
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      }
    }, [_c("vs-icon", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.isCollapsed,
        expression: "!isCollapsed"
      }],
      attrs: {
        icon: "more_horiz"
      }
    }), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
      staticClass: "m-2"
    }, [_c("label", {
      staticClass: "cursor-pointer hover:text-primary",
      domProps: {
        textContent: _vm._s("Rename")
      },
      on: {
        click: function click($event) {
          return _vm.toggleRenameMenuPrompt("menu", menu);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "m-2"
    }, [_c("label", {
      staticClass: "cursor-pointer hover:text-primary",
      domProps: {
        textContent: _vm._s("Add SubMenu")
      },
      on: {
        click: function click($event) {
          return _vm.toggleSubMenuPopup(null, menu.id);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "m-2"
    }, [_c("label", {
      staticClass: "cursor-pointer hover:text-primary",
      domProps: {
        textContent: _vm._s("Share with")
      },
      on: {
        click: function click($event) {
          return _vm.toggleMenuSharePopup("menu", menu.id);
        }
      }
    })]), _vm._v(" "), _vm.isOwner(menu.ownerId) ? _c("div", {
      staticClass: "m-2"
    }, [_c("label", {
      staticClass: "cursor-pointer hover:text-primary",
      domProps: {
        textContent: _vm._s("Delete")
      },
      on: {
        click: function click($event) {
          return _vm.initDeletePrompt("menu", menu.id, menu.name);
        }
      }
    })]) : _vm._e()])], 1) : _vm._e()], 1), _vm._v(" "), menu.subMenus && menu.subMenus.length > 0 && menu.isOpen && !_vm.isCollapsed ? _c("div", {
      staticClass: "w-full"
    }, _vm._l(menu.subMenus, function (subMenu, i) {
      return _c("div", {
        key: i,
        staticClass: "sub-menu pl-10"
      }, [_c("div", {
        staticClass: "flex items-center"
      }, [_vm.currentRoute === "/menu-view/".concat(menu.id, "/").concat(subMenu.id) ? _c("vs-icon", {
        attrs: {
          icon: "lens",
          size: "10px",
          color: subMenu.color || _vm.defaultColor
        }
      }) : _c("vs-icon", {
        attrs: {
          icon: "trip_origin",
          size: "10px",
          color: subMenu.color || _vm.defaultColor
        }
      }), _vm._v(" "), _c("label", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !_vm.isCollapsed,
          expression: "!isCollapsed"
        }],
        class: ["ml-4 text-sm", _vm.currentRoute === "/menu-view/".concat(menu.id, "/").concat(subMenu.id) ? "text-primary" : "cursor-pointer"],
        on: {
          click: function click($event) {
            $event.stopPropagation();
            return _vm.redirectToPath("/menu-view/".concat(menu.id, "/").concat(subMenu.id));
          }
        }
      }, [_vm._v("\n                          " + _vm._s(subMenu.name) + "\n                        ")])], 1), _vm._v(" "), !_vm.isAnyDialogActive ? _c("vs-dropdown", {
        staticClass: "cursor-pointer show-on-submenu-hover custom-sub-menu-dropdown",
        attrs: {
          "vs-custom-content": "",
          "vs-trigger-click": ""
        }
      }, [_c("vs-icon", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !_vm.isCollapsed,
          expression: "!isCollapsed"
        }],
        attrs: {
          icon: "more_horiz"
        }
      }), _vm._v(" "), _c("vs-dropdown-menu", [_c("div", {
        staticClass: "m-2"
      }, [_c("label", {
        staticClass: "cursor-pointer hover:text-primary",
        domProps: {
          textContent: _vm._s("Rename")
        },
        on: {
          click: function click($event) {
            return _vm.toggleRenameMenuPrompt("subMenu", _objectSpread({}, subMenu, {
              menuId: menu.id
            }));
          }
        }
      })]), _vm._v(" "), _c("div", {
        staticClass: "m-2"
      }, [_c("label", {
        staticClass: "cursor-pointer hover:text-primary",
        domProps: {
          textContent: _vm._s("Share with")
        },
        on: {
          click: function click($event) {
            return _vm.toggleMenuSharePopup("subMenu", subMenu.id);
          }
        }
      })])])], 1) : _vm._e()], 1);
    }), 0) : _vm._e()])]);
  }), 0) : _vm._e()])], 1) : _vm._e()], 2), _vm._v(" "), !_vm.isCollapsed ? _c("div", {
    class: ["flex items-center sidebar-bottom", !_vm.isCollapsed ? "justify-around" : "justify-center"]
  }, [_c("div", {
    staticClass: "vx-row m-0 py-2 items-center cursor-pointer",
    on: {
      click: _vm.goToChat
    }
  }, [_c("feather-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: "MessageSquareIcon"
    }
  }), _vm._v(" "), _vm.hasUnReadyMessage ? _c("div", {
    staticClass: "new-message-dot"
  }) : _vm._e()], 1), _vm._v(" "), !_vm.hideForSpecificCompanys() && !_vm.hideAutomation ? _c("div", {
    staticClass: "vx-row m-0 py-3 items-center w-fit cursor-pointer",
    on: {
      click: _vm.toggleAutomationPopup
    }
  }, [_c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isCollapsed,
      expression: "!isCollapsed"
    }],
    staticClass: "w-auto align-middle",
    attrs: {
      height: "20px",
      src: __webpack_require__(/*! @assets/images/custom/automation-icon.svg */ "./resources/assets/images/custom/automation-icon.svg")
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isCollapsed && !_vm.hideAccountSetting,
      expression: "!isCollapsed && !hideAccountSetting"
    }],
    staticClass: "vx-row m-0 py-3 items-center w-fit cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.redirectToPath("/account-setting");
      }
    }
  }, [_c("feather-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: "SettingsIcon",
      title: "Account Settings"
    }
  })], 1), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isCollapsed,
      expression: "!isCollapsed"
    }],
    staticClass: "vx-row m-0 py-3 items-center"
  }, [_c("profile-drop-down", {
    staticClass: "flex-shrink-0"
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row m-0 py-3 items-center w-fit cursor-pointer",
    on: {
      click: _vm.toggleSidebar
    }
  }, [_c("feather-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: _vm.sidebarToggleIcon
    }
  })], 1)]) : _c("div", {
    staticClass: "p-3"
  }, [_c("div", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip.right",
      value: _vm.tooltipOptions,
      expression: "tooltipOptions",
      modifiers: {
        right: true
      }
    }],
    staticClass: "vx-row m-0 py-2 items-center cursor-pointer",
    on: {
      click: _vm.goToChat
    }
  }, [_c("feather-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: "MessageSquareIcon"
    }
  }), _vm._v(" "), _vm.hasUnReadyMessage ? _c("div", {
    staticClass: "new-message-dot"
  }) : _vm._e()], 1), _vm._v(" "), !_vm.hideForSpecificCompanys() && !_vm.hideAutomation ? _c("div", {
    staticClass: "vx-row m-0 py-2 items-center w-fit cursor-pointer",
    on: {
      click: _vm.toggleAutomationPopup
    }
  }, [_c("img", {
    staticClass: "w-auto align-middle",
    attrs: {
      height: "20px",
      src: __webpack_require__(/*! @assets/images/custom/automation-icon.svg */ "./resources/assets/images/custom/automation-icon.svg")
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.hideAccountSetting,
      expression: "!hideAccountSetting"
    }],
    staticClass: "vx-row m-0 py-2 items-center w-fit cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.redirectToPath("/account-setting");
      }
    }
  }, [_c("feather-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: "SettingsIcon",
      title: "Account Settings"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row m-0 py-2 items-center"
  }, [_c("profile-drop-down", {
    staticClass: "flex-shrink-0"
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-row m-0 py-1 items-center w-fit cursor-pointer",
    on: {
      click: _vm.toggleSidebar
    }
  }, [_c("feather-icon", {
    staticClass: "cursor-pointer",
    attrs: {
      icon: _vm.sidebarToggleIcon
    }
  })], 1)])]), _vm._v(" "), _c("automation-popup", {
    attrs: {
      openAutomationPopup: _vm.openAutomationPopup
    },
    on: {
      closeAutomationPopup: function closeAutomationPopup($event) {
        return _vm.toggleAutomationPopup(false);
      },
      reopenAutomationPopup: function reopenAutomationPopup($event) {
        return _vm.toggleAutomationPopup(true);
      }
    }
  }), _vm._v(" "), _vm.menuPopupActive ? _c("Menu", {
    attrs: {
      isPromptActive: _vm.menuPopupActive
    },
    on: {
      closePrompt: function closePrompt($event) {
        return _vm.toggleMenuPopup(false);
      },
      submit: _vm.onMenuSubmit
    }
  }) : _vm._e(), _vm._v(" "), _c("MenuNamePrompt", {
    attrs: {
      title: _vm.menuNamePromptTitle,
      isPromptActive: _vm.menuNamePrompt.isActive,
      currentName: _vm.menuNamePrompt.name,
      color: _vm.menuNamePrompt.color,
      isAvatarVisible: _vm.menuNamePrompt.type === "menu"
    },
    on: {
      onClose: _vm.closeRenameMenuPrompt,
      onAccept: _vm.renameMenu
    }
  }), _vm._v(" "), _c("SubMenu", {
    attrs: {
      isPromptActive: _vm.subMenuPopupActive
    },
    on: {
      closePrompt: function closePrompt($event) {
        return _vm.toggleSubMenuPopup(false);
      },
      submit: _vm.onSubMenuSubmit
    }
  }), _vm._v(" "), _vm.menuSharePopup.isActive ? _c("MenuShareDialog", {
    attrs: {
      isPromptActive: _vm.menuSharePopup.isActive,
      sharedWith: _vm.menuSharePopup.sharedWith,
      accessLevels: _vm.accessLevels,
      allUsers: _vm.allUsers,
      recordType: _vm.menuSharePopup.type,
      isPrivate: _vm.menuSharePopup.isPrivate
    },
    on: {
      onClose: _vm.closeMenuSharePopup,
      onSubmit: _vm.updateSharePermissions
    }
  }) : _vm._e(), _vm._v(" "), _vm.deletePrompt.isActive ? _c("DeletePrompt", {
    attrs: {
      isPromptActive: _vm.deletePrompt.isActive,
      label: "Do you want to delete ".concat(_vm.deletePrompt.selectedItemName, "?")
    },
    on: {
      onAccept: _vm.deleteRecord,
      onClose: _vm.closeDeletePrompt
    }
  }) : _vm._e()], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true& ***!
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
    staticClass: "layout--main",
    class: [_vm.layoutTypeClass, _vm.navbarClasses, _vm.footerClasses, {
      "no-scroll": _vm.isAppPage
    }]
  }, [_c("div", {
    class: [_vm.contentAreaClass, {
      "show-overlay": _vm.bodyOverlay
    }],
    attrs: {
      id: "content-area"
    }
  }, [_c("div", {
    attrs: {
      id: "content-overlay"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex w-full"
  }, [_c("CustomSidebar", {
    class: ["customSidebar", _vm.isCollapsed ? "width-70" : ""],
    attrs: {
      navMenuItems: _vm.navMenuItemsList
    },
    on: {
      sidebarResize: _vm.sidebarResize,
      collapseSidebar: function collapseSidebar($event) {
        _vm.isCollapsed = !_vm.isCollapsed;
      }
    }
  }), _vm._v(" "), _c("div", {
    class: ["content-wrapper ml-auto", _vm.isCollapsed ? "width-100-70" : "width-100-200"],
    style: _vm.contentWrapperWidth,
    attrs: {
      id: "content-wrapper"
    }
  }, [_c("div", {
    staticClass: "router-view"
  }, [_c("div", {
    staticClass: "router-content"
  }, [_vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle ? _c("div", {
    staticClass: "router-header flex flex-wrap items-center mb-12"
  }, [_c("div", {
    staticClass: "content-area__heading",
    class: {
      "pr-4 border-0 md:border-r border-solid border-grey-light": _vm.$route.meta.breadcrumb
    }
  }, [_c("h2", {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.routeTitle))])]), _vm._v(" "), _vm.$route.meta.breadcrumb ? _c("vx-breadcrumb", {
    staticClass: "ml-4 md:block hidden",
    attrs: {
      route: _vm.$route,
      isRTL: _vm.$vs.rtl
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "content-area__content"
  }, [!_vm.hideScrollToTop ? _c("back-to-top", {
    attrs: {
      bottom: _vm.backToTopSpaceFromBottom,
      right: _vm.$vs.rtl ? "calc(100% - 2.2rem - 38px)" : "30px",
      visibleoffset: "500"
    }
  }, [_c("vs-button", {
    staticClass: "shadow-lg btn-back-to-top",
    attrs: {
      "icon-pack": "feather",
      icon: "icon-arrow-up"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("router-view", {
    attrs: {
      isCollapsed: _vm.isCollapsed
    },
    on: {
      changeRouteTitle: _vm.changeRouteTitle,
      setAppClasses: function setAppClasses(classesStr) {
        return _vm.$emit("setAppClasses", classesStr);
      }
    }
  })], 1)])])])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar[data-v-104a1c25] {\n  height: 100vh;\n  position: fixed;\n  transition: all 0.4s ease;\n  top: 0;\n  /* box-shadow: 0 4px 20px 0 rgb(0 0 0 / 5%); */\n}[dir] .side-bar[data-v-104a1c25] {\n  background: rgb(255, 255, 255);\n}[dir=ltr] .side-bar[data-v-104a1c25] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1333333333);\n}[dir=rtl] .side-bar[data-v-104a1c25] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1333333333);\n}\n.side-bar .list-item[data-v-104a1c25],\n.side-bar .list-item-wrapper[data-v-104a1c25] {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  flex-shrink: 0;\n}\n[dir] .side-bar .list-item[data-v-104a1c25], [dir] .side-bar .list-item-wrapper[data-v-104a1c25] {\n  cursor: pointer;\n}\n.side-bar .list-item .list-icon[data-v-104a1c25],\n.side-bar .list-item-wrapper .list-icon[data-v-104a1c25] {\n  transition: transform 0.2s ease-in-out;\n  width: 40px;\n  height: 32px;\n  flex-shrink: 0;\n  position: relative;\n}\n[dir] .side-bar .list-item .list-icon[data-v-104a1c25], [dir] .side-bar .list-item-wrapper .list-icon[data-v-104a1c25] {\n  padding: 2px 7px;\n}\n.side-bar .list-item .list-label[data-v-104a1c25],\n.side-bar .list-item-wrapper .list-label[data-v-104a1c25] {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1;\n}\n.side-bar .list-item .text-primary .list-label[data-v-104a1c25],\n.side-bar .list-item-wrapper .text-primary .list-label[data-v-104a1c25] {\n  font-weight: 600;\n}\n.w-fit[data-v-104a1c25] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.height-24px[data-v-104a1c25] {\n  height: 24px;\n}\n.text-primary .custom-icon[data-v-104a1c25] {\n  filter: invert(28%) sepia(73%) saturate(1570%) hue-rotate(187deg) brightness(101%) contrast(96%);\n}\n.custom-icon[data-v-104a1c25] {\n  filter: invert(38%) sepia(0%) saturate(3%) hue-rotate(170deg) brightness(94%) contrast(81%);\n}\n.new-menu-btn[data-v-104a1c25] {\n  color: #7c828d;\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 500;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95%;\n  grid-gap: 0.25rem;\n  gap: 0.25rem;\n}\n[dir] .new-menu-btn[data-v-104a1c25] {\n  background: #e4e4e4;\n  border-radius: 5px;\n  margin: 5px;\n  cursor: pointer;\n  border: none;\n}\n[dir] .new-menu-btn[data-v-104a1c25]:hover {\n  background: #e4e4e4;\n}\n.avatar-size[data-v-104a1c25] {\n  width: 20px;\n  height: 20px;\n  font-size: 0.8em;\n  font-weight: 500;\n}\n[dir] .avatar-size[data-v-104a1c25] {\n  border-radius: 25%;\n  margin-top: 5px;\n}\n[dir=ltr] .avatar-size[data-v-104a1c25] {\n  margin-left: 14px;\n}\n[dir=rtl] .avatar-size[data-v-104a1c25] {\n  margin-right: 14px;\n}\n.menu[data-v-104a1c25] {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  flex-wrap: wrap;\n  position: relative;\n  /* &:hover{\n    background: rgba(233,235,240);\n  } */\n}\n[dir] .menu[data-v-104a1c25] {\n  margin-top: 5px;\n  cursor: pointer;\n}\n.menu label[data-v-104a1c25] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.sub-menu[data-v-104a1c25] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 25px;\n  /* &:hover{\n    background: rgba(233,235,240);\n  } */\n}\n.sub-menu label[data-v-104a1c25] {\n  font-size: 12px !important;\n  font-weight: 400;\n  line-height: 32px;\n}\n.show-on-menu-hover[data-v-104a1c25],\n.show-on-submenu-hover[data-v-104a1c25] {\n  display: none;\n}\n.expand-icon[data-v-104a1c25] {\n  position: absolute;\n}\n.menu:hover .show-on-menu-hover[data-v-104a1c25],\n.sub-menu:hover .show-on-submenu-hover[data-v-104a1c25] {\n  display: block;\n}\n.bg-active[data-v-104a1c25] {\n  width: 100%;\n}\n[dir] .bg-active[data-v-104a1c25] {\n  background: rgb(233, 235, 240);\n}\n.custom-sub-menu-dropdown[data-v-104a1c25] {\n  position: absolute;\n}\n[dir=ltr] .custom-sub-menu-dropdown[data-v-104a1c25] {\n  right: 18px;\n}\n[dir=rtl] .custom-sub-menu-dropdown[data-v-104a1c25] {\n  left: 18px;\n}\n.small-menu-btn[data-v-104a1c25] {\n  width: 20px;\n}\n.sidebar-bottom[data-v-104a1c25] {\n  /* border-top: 1px solid #e9ebf0; */\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n[dir] .sidebar-bottom[data-v-104a1c25] {\n  background: #fff;\n}\n\n/* .features-list{\n  overflow: auto;\n    padding-bottom: 20px;\n} */\n.resize-handle[data-v-104a1c25] {\n  position: absolute;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  height: 100%;\n  width: 5px;\n  transition: background 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.1s;\n  opacity: 0.2;\n  z-index: 1;\n}\n[dir] .resize-handle[data-v-104a1c25] {\n  cursor: col-resize !important;\n  background: transparent;\n}\n[dir=ltr] .resize-handle[data-v-104a1c25] {\n  right: 0;\n}\n[dir=rtl] .resize-handle[data-v-104a1c25] {\n  left: 0;\n}\n[dir] .resize-handle[data-v-104a1c25]:hover, [dir] .resize-handle[data-v-104a1c25]:active {\n  border-color: #7b68ee;\n  border-style: solid;\n}\n.expand-width[data-v-104a1c25] {\n  width: 250px;\n}\n.compress-width[data-v-104a1c25] {\n  width: 70px;\n}\n[dir=ltr] .ml-5px[data-v-104a1c25] {\n  margin: 0 0 0 5px !important;\n}\n[dir=rtl] .ml-5px[data-v-104a1c25] {\n  margin: 0 5px 0 0 !important;\n}\n.h-7[data-v-104a1c25] {\n  height: 2rem !important;\n}\n.new-message-dot[data-v-104a1c25] {\n  width: 10px;\n  height: 10px; /* Or any color you prefer for the dot */\n  display: inline-block;\n}\n[dir] .new-message-dot[data-v-104a1c25] {\n  background-color: red;\n  border-radius: 50%;\n}\n[dir=ltr] .new-message-dot[data-v-104a1c25] {\n  margin-left: 5px;\n}\n[dir=rtl] .new-message-dot[data-v-104a1c25] {\n  margin-right: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-tooltip {\n  position: relative;\n  z-index: 99;\n  width: 280px;\n  color: #495057;\n}[dir] .chat-tooltip {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  border: 0 none;\n  border-radius: 6px;\n  background: #ffffff;\n}[dir=ltr] .chat-tooltip {\n  margin-left: 50px;\n}[dir=rtl] .chat-tooltip {\n  margin-right: 50px;\n}\n.chat-tooltip .tooltip-inner {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 6;\n  -webkit-box-orient: vertical;\n}\n[dir] .chat-tooltip .tooltip-inner {\n  padding: 8px;\n  padding-bottom: 5px;\n}\n.chat-tooltip .tooltip-arrow {\n  width: 12px;\n  height: 40px;\n  position: absolute;\n  overflow: hidden;\n}\n[dir=ltr] .chat-tooltip .tooltip-arrow {\n  transform: translateX(-85%);\n}\n[dir=rtl] .chat-tooltip .tooltip-arrow {\n  transform: translateX(85%);\n}\n.chat-tooltip .tooltip-arrow::after {\n  content: \"\";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n}\n[dir] .chat-tooltip .tooltip-arrow::after {\n  background: white;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);\n}\n[dir=ltr] .chat-tooltip .tooltip-arrow::after {\n  transform: translateX(8%) translateY(85%) rotate(45deg);\n  left: 30%;\n}\n[dir=rtl] .chat-tooltip .tooltip-arrow::after {\n  transform: translateX(-8%) translateY(85%) rotate(-45deg);\n  right: 30%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customSidebar[data-v-22fa5a70] {\n  z-index: 999;\n}\n.content-wrapper[data-v-22fa5a70],\n.the-footer[data-v-22fa5a70] {\n  transition: 0.5s;\n}\n[dir] .router-view[data-v-22fa5a70], [dir] .the-footer[data-v-22fa5a70] {\n  padding: 1rem;\n}\n.width-70[data-v-22fa5a70] {\n  width: 70px;\n}\n.width-100-200[data-v-22fa5a70] {\n  width: calc(100% - 250px) !important;\n}\n.width-100-70[data-v-22fa5a70] {\n  width: calc(100% - 70px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-to-top-fade-enter-active, \n.back-to-top-fade-leave-active {\n  transition: opacity .7s;\n}\n.back-to-top-fade-enter, \n.back-to-top-fade-leave-to {\n  opacity: 0;\n}\n.vue-back-to-top {\n  position: fixed;\n  z-index: 1000;\n}\n[dir] .vue-back-to-top {\n  cursor:pointer;\n}\n.vue-back-to-top .default {\n  color: #ffffff;\n  height: 30px;\n  line-height: 30px;\n  width: 160px;\n}\n[dir] .vue-back-to-top .default {\n  background-color: #f5c85c;\n  border-radius: 3px;\n  text-align: center;\n}\n.vue-back-to-top .default span{\n  color:#ffffff;\n}\n.vue-back-to-top--is-footer {\n  bottom: 50% !important;\n  position: absolute;\n}\n[dir] .vue-back-to-top--is-footer {\n  transform: translateY(50%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--7-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/lib??ref--7-2!./styles.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-backtotop/src/BackToTop.vue":
/*!******************************************************!*\
  !*** ./node_modules/vue-backtotop/src/BackToTop.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackToTop.vue?vue&type=template&id=58c5690e& */ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&");
/* harmony import */ var _BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackToTop.vue?vue&type=script&lang=js& */ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-backtotop/src/BackToTop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib??vue-loader-options!./BackToTop.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&":
/*!*************************************************************************************!*\
  !*** ./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../vue-loader/lib??vue-loader-options!./BackToTop.vue?vue&type=template&id=58c5690e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_template_id_58c5690e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-backtotop/src/main.js":
/*!************************************************!*\
  !*** ./node_modules/vue-backtotop/src/main.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackToTop.vue */ "./node_modules/vue-backtotop/src/BackToTop.vue");
 

/**
 * Check why can't use () => {}
 */
_BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue, options) {
  Vue.component(_BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
}

/* harmony default export */ __webpack_exports__["default"] = (_BackToTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--7-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/lib??ref--7-2!./styles.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-backtotop/src/styles.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_7_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_lib_index_js_ref_7_2_styles_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'Voltar ao topo',
    },
    visibleoffset: {
      type: [String, Number],
      default: 600,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
    scrollFn: {
      type: Function,
      default: function (eventObject) {},
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch window scroll event 
     * @return {void}
     */
    catchScroll () {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
      this.scrollFn(this)
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop () {
      window.smoothscroll()
      this.$emit('scrolled')
    }
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-backtotop/src/BackToTop.vue?vue&type=template&id=58c5690e& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c("transition", { attrs: { name: "back-to-top-fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible",
          },
        ],
        staticClass: "vue-back-to-top",
        style: `bottom:${this.bottom};right:${this.right};`,
        on: { click: _vm.backToTop },
      },
      [
        _vm._t("default", function () {
          return [
            _c("div", { staticClass: "default" }, [
              _c("span", [
                _vm._v("\n          " + _vm._s(_vm.text) + "\n        "),
              ]),
            ]),
          ]
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/custom/automation-icon.svg":
/*!************************************************************!*\
  !*** ./resources/assets/images/custom/automation-icon.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/automation-icon.svg?33677509d0409e7bfd823fd2fc953673";

/***/ }),

/***/ "./resources/assets/images/custom/chartInfoGraphicIcon.svg":
/*!*****************************************************************!*\
  !*** ./resources/assets/images/custom/chartInfoGraphicIcon.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/chartInfoGraphicIcon.svg?d99568a70f012aaa2cee8e6a4e1a0960";

/***/ }),

/***/ "./resources/assets/images/custom/custom-trailer.svg":
/*!***********************************************************!*\
  !*** ./resources/assets/images/custom/custom-trailer.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/custom-trailer.svg?b80301cc6a4b85b9404e87a1eec9b26e";

/***/ }),

/***/ "./resources/assets/images/custom/handshake.svg":
/*!******************************************************!*\
  !*** ./resources/assets/images/custom/handshake.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/handshake.svg?213934d1261924a51f096a8e39ea3eec";

/***/ }),

/***/ "./resources/assets/images/custom/marketing.svg":
/*!******************************************************!*\
  !*** ./resources/assets/images/custom/marketing.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/marketing.svg?1d25ba6fcf1e5c2ac1e4d28cbb70e71c";

/***/ }),

/***/ "./resources/assets/images/custom/rates.svg":
/*!**************************************************!*\
  !*** ./resources/assets/images/custom/rates.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/rates.svg?f8017959ccbeadbe1b811c653902722b";

/***/ }),

/***/ "./resources/assets/images/custom/safety.svg":
/*!***************************************************!*\
  !*** ./resources/assets/images/custom/safety.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/safety.svg?e7c2c4fa3bb6c6c73f955ae1186cfc42";

/***/ }),

/***/ "./resources/assets/images/logo/truckpedia-full-logo.svg":
/*!***************************************************************!*\
  !*** ./resources/assets/images/logo/truckpedia-full-logo.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/truckpedia-full-logo.svg?538c100dfee456eca7d42381ff2b5f58";

/***/ }),

/***/ "./resources/assets/images/logo/truckpedia-intial-logo.svg":
/*!*****************************************************************!*\
  !*** ./resources/assets/images/logo/truckpedia-intial-logo.svg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/truckpedia-intial-logo.svg?b4abf62e2d5f1d959bd9ced004ec34c9";

/***/ }),

/***/ "./resources/assets/images/logo/truckpedia-tms-full-logo.svg":
/*!*******************************************************************!*\
  !*** ./resources/assets/images/logo/truckpedia-tms-full-logo.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/truckpedia-tms-full-logo.svg?1927df486366506660fa722e8f9e1064";

/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=212d79e5& */ "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
/* harmony import */ var _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=212d79e5& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/Logo.vue?vue&type=template&id=212d79e5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_212d79e5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=287afc22& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=287afc22& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/CustomSidebar.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomSidebar_vue_vue_type_template_id_104a1c25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true& */ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true&");
/* harmony import */ var _CustomSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomSidebar_vue_vue_type_style_index_0_id_104a1c25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true& */ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true&");
/* harmony import */ var _CustomSidebar_vue_vue_type_style_index_1_id_104a1c25_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss& */ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _CustomSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomSidebar_vue_vue_type_template_id_104a1c25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomSidebar_vue_vue_type_template_id_104a1c25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "104a1c25",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/customizer/CustomSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_0_id_104a1c25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=0&id=104a1c25&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_0_id_104a1c25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_0_id_104a1c25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_0_id_104a1c25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_0_id_104a1c25_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_1_id_104a1c25_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=style&index=1&id=104a1c25&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_1_id_104a1c25_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_1_id_104a1c25_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_1_id_104a1c25_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_style_index_1_id_104a1c25_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_template_id_104a1c25_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/customizer/CustomSidebar.vue?vue&type=template&id=104a1c25&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_template_id_104a1c25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSidebar_vue_vue_type_template_id_104a1c25_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vertical-nav-menu/navMenuItems.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var navItemSuperAdmin = [{
  url: '/',
  name: 'Home',
  slug: 'home',
  icon: 'HomeIcon'
}, {
  url: '/companies',
  name: 'Companies',
  slug: 'companies',
  icon: 'GlobeIcon'
}, {
  url: '/payment-history',
  name: 'Payment History',
  slug: 'payments',
  icon: 'CreditCardIcon'
}, {
  url: '/campaign-templates',
  name: 'Campaign Templates',
  slug: 'compaignTemplates',
  customIcon: 'marketingIcon'
}];
var navItemAdmin = [{
  url: '/',
  name: 'Home',
  slug: 'home',
  icon: 'HomeIcon'
}, {
  url: '/dispatch',
  name: 'Dispatch',
  slug: 'dispatch',
  icon: 'TruckIcon'
}, // { url: '/quotes', name: 'Quotes', slug: 'quotes', icon: 'ArchiveIcon' },
{
  url: '/calendar',
  name: 'Calendar',
  slug: 'calendar',
  icon: 'CalendarIcon'
}, // {
//   url: "/loads-matching",
//   name: "Load Matching",
//   slug: "load-matching",
//   icon: "CalendarIcon",
// },
{
  url: '/invoices',
  name: 'Accounting',
  slug: 'invoices',
  icon: 'CreditCardIcon'
}, {
  url: '/planning',
  name: 'Planning',
  slug: 'planning',
  icon: 'PackageIcon'
}, {
  url: '/reports',
  name: 'Reports',
  slug: 'report',
  icon: 'PieChartIcon'
}, // {
//   url: '/',
//   name: 'Reports',
//   slug: 'report',
//   icon: 'PieChartIcon',
//   submenu: [
//     {
//       url: '/reports',
//       name: 'Reports',
//       slug: 'report'
//     },
//     {
//       url: '/reports/revenue',
//       name: 'Revenue',
//       slug: 'report-revenue'
//     },
//     {
//       url: '/reports/driver-pay',
//       name: 'Driver Pay',
//       slug: 'report-driver-pay'
//     }
//   ]
// },
{
  url: '/maintenance-v2',
  name: 'Maintenance',
  slug: 'maintenance',
  icon: 'ToolIcon'
}, {
  url: '/drivers',
  name: 'Drivers',
  slug: 'driver',
  icon: 'UserIcon'
}, {
  url: '/trucks',
  name: 'Trucks',
  slug: 'truck',
  icon: 'TruckIcon'
}, {
  url: '/trailers',
  name: 'Trailers',
  slug: 'trailer',
  customIcon: 'trailer'
}, {
  url: '/customers',
  name: 'Customers',
  slug: 'customer',
  customIcon: 'customer'
}, {
  url: '/marketing',
  name: 'Marketing',
  slug: 'marketing',
  customIcon: 'marketingIcon',
  children: [{
    url: '/marketing/email-accounts',
    name: 'Email Accounts',
    slug: 'marketing-email-accounts',
    icon: 'MailIcon'
  }, {
    url: '/marketing/campaigns',
    name: 'Campaigns',
    slug: 'marketing-campaigns',
    icon: 'SendIcon'
  }, {
    url: '/marketing/email-inbox',
    name: 'Inbox',
    slug: 'marketing-emailInbox',
    icon: 'MessageCircleIcon'
  }, {
    url: '/marketing/crm',
    name: 'CRM',
    slug: 'marketing-crm',
    customIcon: 'chartInfoGraphicIcon'
  }]
}, {
  url: '/safety',
  name: 'Safety',
  slug: 'safety',
  customIcon: 'safety'
},
/*{
  url: '/locate-drivers',
  name: 'Locate Drivers',
  slug: 'locate-drivers',
  icon: 'CompassIcon'
}*/
{
  url: '/quotes',
  name: 'Bookings',
  slug: 'quotes',
  icon: 'ClipboardIcon'
}, {
  url: '/rates',
  name: 'Rates',
  slug: 'rates',
  customIcon: 'ratesListIcon'
}];
var navItemDispatcher = [{
  url: '/dispatch',
  name: 'Dispatch',
  slug: 'dispatch',
  icon: 'TruckIcon'
}, // { url: '/quotes', name: 'Quotes', slug: 'quotes', icon: 'ArchiveIcon' },
{
  url: '/calendar',
  name: 'Calendar',
  slug: 'calendar',
  icon: 'CalendarIcon'
}, // {
//   url: "/loads-matching",
//   name: "Load Matching",
//   slug: "load-matching",
//   icon: "CalendarIcon",
// },
{
  url: '/invoices',
  name: 'Accounting',
  slug: 'invoices',
  icon: 'CreditCardIcon'
}, {
  url: '/planning',
  name: 'Planning',
  slug: 'planning',
  icon: 'PackageIcon'
}, {
  url: '/reports',
  name: 'Reports',
  slug: 'report',
  icon: 'PieChartIcon'
}, {
  url: '/maintenance-v2',
  name: 'Maintenance',
  slug: 'maintenance',
  icon: 'ToolIcon'
}, {
  url: '/drivers',
  name: 'Drivers',
  slug: 'driver',
  icon: 'UserIcon'
}, {
  url: '/trucks',
  name: 'Trucks',
  slug: 'truck',
  icon: 'TruckIcon'
}, {
  url: '/trailers',
  name: 'Trailers',
  slug: 'trailer',
  customIcon: 'trailer'
}, {
  url: '/customers',
  name: 'Customers',
  slug: 'customer',
  customIcon: 'customer'
}, {
  url: '/safety',
  name: 'Safety',
  slug: 'safety',
  customIcon: 'safety'
}, {
  url: '/quotes',
  name: 'Bookings',
  slug: 'quotes',
  icon: 'ClipboardIcon'
}, {
  url: '/marketing',
  name: 'Marketing',
  slug: 'marketing',
  customIcon: 'marketingIcon',
  children: [{
    url: '/marketing/email-accounts',
    name: 'Email Accounts',
    slug: 'marketing-email-accounts',
    icon: 'MailIcon'
  }, {
    url: '/marketing/campaigns',
    name: 'Campaigns',
    slug: 'marketing-campaigns',
    icon: 'SendIcon'
  }, {
    url: '/marketing/email-inbox',
    name: 'Inbox',
    slug: 'marketing-emailInbox',
    icon: 'MessageCircleIcon'
  }, {
    url: '/marketing/crm',
    name: 'CRM',
    slug: 'marketing-crm',
    icon: 'MessageCircleIcon'
  }]
}, {
  url: '/rates',
  name: 'Rates',
  slug: 'rates',
  customIcon: 'ratesListIcon'
}];
var navItemWarehouseOperator = [{
  url: '/dispatch',
  name: 'Dispatch',
  slug: 'dispatch',
  icon: 'TruckIcon'
}];
var navItemTagOperator = [{
  url: '/dispatch',
  name: 'Dispatch',
  slug: 'dispatch',
  icon: 'TruckIcon'
}];
var navItemShipperBroker = [// { url: '/', name: 'Home', slug: 'home', icon: 'HomeIcon' },
{
  url: '/dispatch',
  name: 'Dispatch',
  slug: 'dispatch',
  icon: 'TruckIcon'
}, // { url: '/quotes', name: 'Quotes', slug: 'quotes', icon: 'ArchiveIcon' },
{
  url: '/calendar',
  name: 'Calendar',
  slug: 'calendar',
  icon: 'CalendarIcon'
}, {
  url: '/invoices',
  name: 'Accounting',
  slug: 'invoices',
  icon: 'CreditCardIcon'
}, {
  url: '/carriers',
  name: 'Carriers',
  slug: 'carriers',
  customIcon: 'customer'
}, {
  url: '/quotes',
  name: 'Bookings',
  slug: 'quotes',
  icon: 'ClipboardIcon'
}, {
  url: '/marketing',
  name: 'Marketing',
  slug: 'marketing',
  customIcon: 'marketingIcon',
  children: [{
    url: '/marketing/email-accounts',
    name: 'Email Accounts',
    slug: 'marketing-email-accounts',
    icon: 'MailIcon'
  }, {
    url: '/marketing/campaigns',
    name: 'Campaigns',
    slug: 'marketing-campaigns',
    icon: 'SendIcon'
  }, {
    url: '/marketing/email-inbox',
    name: 'Inbox',
    slug: 'marketing-emailInbox',
    icon: 'MessageCircleIcon'
  }, {
    url: '/marketing/crm',
    name: 'CRM',
    slug: 'marketing-crm',
    icon: 'MessageCircleIcon'
  }]
}];
var navItemMaintenance = [{
  url: '/maintenance-v2',
  name: 'Maintenance',
  slug: 'maintenance',
  icon: 'ToolIcon'
}, {
  url: '/drivers',
  name: 'Drivers',
  slug: 'driver',
  icon: 'UserIcon'
}, {
  url: '/trucks',
  name: 'Trucks',
  slug: 'truck',
  icon: 'TruckIcon'
}, {
  url: '/trailers',
  name: 'Trailers',
  slug: 'trailer',
  customIcon: 'trailer'
}];
/*
 * TODO : return navbar based on user role
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  super_admin: navItemSuperAdmin,
  admin: navItemAdmin,
  dispatcher: navItemDispatcher,
  warehouse_operator: navItemWarehouseOperator,
  tag_operator: navItemTagOperator,
  shipperBroker: navItemShipperBroker,
  maintenance: navItemMaintenance
});

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue":
/*!************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=22fa5a70&scoped=true& */ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_22fa5a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true& */ "./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22fa5a70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_22fa5a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&id=22fa5a70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_22fa5a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_22fa5a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_22fa5a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_22fa5a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=71.js.map