(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/Menu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/constants */ "./resources/js/src/components/menu/helpers/constants.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");







function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_2___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_4___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Constants



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Menu',
  components: {
    MenuShare: function MenuShare() {
      return __webpack_require__.e(/*! import() */ 42).then(__webpack_require__.bind(null, /*! ./components/MenuShare.vue */ "./resources/js/src/components/menu/components/MenuShare.vue"));
    }
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])('companyUserV2', ['getAllWebUsersList']), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])("auth", ["user"]), {
    allUsers: function allUsers() {
      var _this = this;

      var userList = this.getAllWebUsersList;
      return userList.map(function (user) {
        return {
          id: user.id,
          fullName: user.fullName,
          accessLevel: _this.accessLevels[0].value
        };
      });
    },
    promptTitle: function promptTitle() {
      var _this2 = this;

      var title = this.menuSteps.find(function (step) {
        return step.id === _this2.currentStep;
      }).title;
      return this.currentStep === 3 ? "".concat(title, " ").concat(this.menuData.name) : title;
    },
    nextNavText: function nextNavText() {
      var _this3 = this;

      return this.menuSteps.find(function (step) {
        return step.id === _this3.currentStep;
      }).nextBtnText || 'Next';
    },
    isNextBtnDisabled: function isNextBtnDisabled() {
      return this.currentStep === 1 && !this.menuData.name.trim();
    },
    colorOptions: function colorOptions() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].spreadSheetColorPickerPallet.filter(function (color) {
        return color !== '#ffffff';
      });
    },
    activeViews: function activeViews() {
      return this.views.filter(function (view) {
        return view.isActive;
      });
    },
    accessLevels: function accessLevels() {
      return _config_constants__WEBPACK_IMPORTED_MODULE_6__["default"].menuAccessLevels || [];
    }
  }),
  data: function data() {
    return {
      menuSteps: [{
        id: 1,
        title: 'Create new menu',
        nextBtnText: 'Next',
        onNextAction: 'navigateForward'
      }, {
        id: 2,
        title: 'Menu color or avatar',
        nextBtnText: 'Next',
        onNextAction: 'navigateForward'
      }, {
        id: 3,
        title: 'Share',
        nextBtnText: 'Next',
        onNextAction: 'navigateForward'
      }, {
        id: 4,
        title: 'Default settings for views',
        nextBtnText: 'Review Menu',
        onNextAction: 'navigateForward'
      }, {
        id: 5,
        title: 'Review Menu',
        nextBtnText: 'Create Menu',
        onNextAction: 'submitMenu'
      }],
      menuData: {
        name: '',
        color: 'primary',
        avatar: '',
        avatarIcon: null,
        isShared: true,
        sharedWith: [],
        views: []
      },
      currentStep: 1,
      avatarIcons: _helpers_constants__WEBPACK_IMPORTED_MODULE_7__["materialIcons"],
      views: [{
        id: 1,
        icon: 'view_stream',
        title: 'Table',
        isActive: true,
        isDefaultView: true
      }, {
        id: 2,
        icon: 'format_list_bulleted',
        title: 'List',
        isActive: false,
        isDefaultView: false
      }, {
        id: 3,
        icon: 'dashboard',
        title: 'Board',
        isActive: false,
        isDefaultView: false
      }, {
        id: 4,
        icon: 'assessment',
        title: 'Gantt',
        isActive: false,
        isDefaultView: false
      }]
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.$store.dispatch('companyUserV2/fetchAllWebUsers');

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5]]);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }(),
    resetMenu: function resetMenu() {
      this.menuData = {
        name: '',
        color: 'primary',
        avatar: '',
        avatarIcon: null,
        isShared: true,
        sharedWith: [],
        views: []
      };
      this.views.forEach(function (view) {
        if (!view.isDefaultView) view.isActive = false;
      });
      this.currentStep = 1;
    },
    onClose: function onClose() {
      this.resetMenu();
      this.$emit('closePrompt');
    },
    onAccept: function onAccept() {
      this.$emit('closePrompt');
    },
    onNextClick: function onNextClick() {
      var action = this.menuSteps[this.currentStep - 1].onNextAction;
      if (action) this[action]();
    },
    navigateBackward: function navigateBackward() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    navigateForward: function navigateForward() {
      if (this.currentStep === 4) this.addViewsToMenu();

      if (this.currentStep < this.menuSteps.length) {
        this.currentStep++;
      }
    },
    changeMenuAvatarColor: function changeMenuAvatarColor(color) {
      this.menuData.color = color;
    },
    getFirstLetter: function getFirstLetter(name) {
      return name.trim().charAt(0);
    },
    changeMenuAvatar: function changeMenuAvatar(icon) {
      this.menuData.avatarIcon = icon;
    },
    addViewsToMenu: function addViewsToMenu() {
      this.menuData.views = this.activeViews.map(function (view) {
        return view.title;
      });
    },
    submitMenu: function submitMenu() {
      var payload = _objectSpread({}, this.menuData);

      if (this.menuData.sharedWith.length) payload.sharedPermissions = this.menuData.sharedWith.map(function (user) {
        return {
          userId: user.id,
          accessLevel: user.accessLevel
        };
      });
      this.$emit("submit", payload);
      this.resetMenu();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=template&id=591b8482&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/Menu.vue?vue&type=template&id=591b8482&scoped=true& ***!
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

  return _c("Dialog", {
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
      }
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full flex items-center justify-between"
        }, [_c("vs-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.currentStep > 1,
            expression: "currentStep > 1"
          }],
          staticClass: "cursor-pointer",
          attrs: {
            icon: "arrow_back_ios",
            size: "small"
          },
          on: {
            click: _vm.navigateBackward
          }
        }), _vm._v(" "), _c("h3", {
          domProps: {
            textContent: _vm._s(_vm.promptTitle)
          }
        }), _vm._v(" "), _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "close",
            size: "small"
          },
          on: {
            click: _vm.onClose
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "w-full"
        }, [_c("vs-button", {
          staticClass: "w-full",
          attrs: {
            color: "primary",
            disabled: _vm.isNextBtnDisabled
          },
          on: {
            click: _vm.onNextClick
          }
        }, [_vm._v("\n        " + _vm._s(_vm.nextNavText) + "\n      ")])], 1)];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 1,
      expression: "currentStep === 1"
    }]
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("vs-input", {
    staticClass: "w-full",
    attrs: {
      label: "Menu Name",
      placeholder: "Enter menu name"
    },
    model: {
      value: _vm.menuData.name,
      callback: function callback($$v) {
        _vm.$set(_vm.menuData, "name", $$v);
      },
      expression: "menuData.name"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 2,
      expression: "currentStep === 2"
    }]
  }, [_c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-1/3"
  }, [_c("vs-avatar", {
    staticClass: "rounded-lg mt-0 menu-avatar",
    attrs: {
      size: "140px",
      color: _vm.menuData.color,
      icon: _vm.menuData.avatarIcon,
      text: _vm.menuData.avatarIcon ? "" : _vm.getFirstLetter(_vm.menuData.name)
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-2/3"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "font-semibold"
  }, [_vm._v("Menu Color")]), _vm._v(" "), _c("div", {
    staticClass: "mt-2 flex flex-wrap gap-1 color-list"
  }, [_c("vs-icon", {
    staticClass: "size-24 icon-color icon-color--black cursor-pointer",
    attrs: {
      icon: "block"
    },
    on: {
      click: function click($event) {
        return _vm.changeMenuAvatarColor("primary");
      }
    }
  }), _vm._v(" "), _vm._l(_vm.colorOptions, function (color, index) {
    return _c("vs-icon", {
      key: index,
      staticClass: "size-24 icon-color cursor-pointer",
      attrs: {
        bg: color,
        icon: _vm.menuData.color === color ? "check" : ""
      },
      on: {
        click: function click($event) {
          return _vm.changeMenuAvatarColor(color);
        }
      }
    });
  })], 2)])])])]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 3,
      expression: "currentStep === 3"
    }]
  }, [_c("div", {
    staticClass: "vx-row flex justify-evenly"
  }, [_c("div", {
    staticClass: "mx-2 w-2/5 flex flex-col items-center cursor-pointer border-2 rounded border-solid border-primary"
  }, [_c("vs-icon", {
    attrs: {
      icon: "lock",
      size: "100px",
      color: "primary"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "my-5 text-primary"
  }, [_vm._v("Private")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-row mt-5 min-height-100"
  }, [_c("menu-share", {
    staticClass: "vx-col",
    attrs: {
      sharedWith: _vm.menuData.sharedWith,
      accessLevels: _vm.accessLevels,
      allUsers: _vm.allUsers
    },
    on: {
      change: function change(_ref) {
        var sharedPermissions = _ref.sharedPermissions;
        return _vm.menuData.sharedWith = sharedPermissions;
      }
    }
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 4,
      expression: "currentStep === 4"
    }]
  }, [_c("div", {
    staticClass: "vx-row m-auto grid gap-4 grid-cols-2"
  }, _vm._l(_vm.views, function (view, index) {
    return _c("div", {
      key: index,
      class: ["flex items-center justify-between p-5 border-2 rounded border-solid border-primary", {
        "bg-primary-light": view.isActive
      }]
    }, [_c("div", {
      staticClass: "flex items-center"
    }, [_c("vs-icon", {
      attrs: {
        icon: view.icon,
        size: "20px"
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "mx-2",
      domProps: {
        textContent: _vm._s(view.title)
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "flex items-center justify-between"
    }, [view.isDefaultView ? _c("span", {
      staticClass: "flex items-center"
    }, [_c("vs-icon", {
      attrs: {
        icon: "home",
        size: "10px"
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "mx-2 text-xs",
      domProps: {
        textContent: _vm._s("Default View")
      }
    })], 1) : _vm._e(), _vm._v(" "), _c("vs-switch", {
      attrs: {
        disabled: view.isDefaultView
      },
      model: {
        value: view.isActive,
        callback: function callback($$v) {
          _vm.$set(view, "isActive", $$v);
        },
        expression: "view.isActive"
      }
    })], 1)]);
  }), 0)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep === 5,
      expression: "currentStep === 5"
    }]
  }, [_c("div", {
    staticClass: "vx-row flex justify-center"
  }, [_c("div", {
    staticClass: "vx-col w-full flex items-center justify-between height-40"
  }, [_c("label", {
    staticClass: "w-1/2 font-semibold",
    domProps: {
      textContent: _vm._s("Menu name")
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "w-1/2 text-right",
    domProps: {
      textContent: _vm._s(_vm.menuData.name)
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full flex items-center justify-between mt-2 height-40"
  }, [_c("label", {
    staticClass: "w-1/2 font-semibold",
    domProps: {
      textContent: _vm._s("Avatar")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "w-1/2 text-right"
  }, [_c("vs-avatar", {
    staticClass: "rounded-lg mt-0 cursor-default",
    attrs: {
      size: "28px",
      color: _vm.menuData.color,
      icon: _vm.menuData.avatarIcon,
      text: _vm.menuData.avatarIcon ? "" : _vm.getFirstLetter(_vm.menuData.name)
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full flex items-center justify-between mt-2 height-40"
  }, [_c("label", {
    staticClass: "w-1/2 font-semibold",
    domProps: {
      textContent: _vm._s("Shared with")
    }
  }), _vm._v(" "), _c("div", [_c("vs-dropdown", {
    attrs: {
      "vs-trigger-click": ""
    }
  }, [_c("a", {
    staticClass: "a-icon flex items-center",
    attrs: {
      "href.prevent": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.menuData.sharedWith.length) + " users\n              "), _c("vs-icon", {
    attrs: {
      icon: "expand_more"
    }
  })], 1), _vm._v(" "), _c("vs-dropdown-menu", _vm._l(_vm.menuData.sharedWith, function (user, index) {
    return _c("vs-dropdown-item", {
      key: index,
      domProps: {
        textContent: _vm._s(user.fullName)
      }
    });
  }), 1)], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full flex items-center justify-between mt-2 height-40"
  }, [_c("label", {
    staticClass: "font-semibold",
    domProps: {
      textContent: _vm._s("Default settings for views")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-right flex gap-2"
  }, _vm._l(_vm.activeViews, function (view, index) {
    return _c("vs-icon", {
      key: index,
      attrs: {
        size: "28px",
        icon: view.icon
      }
    });
  }), 1)])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-591b8482] .menu-avatar .vs-avatar--text {\n  font-size: 2.5rem;\n  font-weight: 500;\n}[dir][data-v-591b8482] .menu-avatar .vs-avatar--text {\n  text-shadow: 0 0 1px #000;\n}\n[data-v-591b8482] .p-dialog-content {\n  overflow-y: visible;\n}\n.con-vs-dropdown--menu[data-v-591b8482] {\n  z-index: 100000;\n}\n.con-vs-dropdown--menu[data-v-591b8482] .vs-dropdown--menu {\n  overflow-x: hidden !important;\n  overflow-y: auto !important;\n  max-height: 360px !important;\n}\n[dir] .con-vs-dropdown--menu .vs-dropdown--item[data-v-591b8482] {\n  margin: 10px;\n}\n.color-list[data-v-591b8482] {\n  max-height: 120px;\n  overflow-x: auto;\n}\n.size-24[data-v-591b8482] {\n  width: 24px !important;\n  height: 24px !important;\n}\n.icon-color[data-v-591b8482] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #fff;\n}\n[dir] .icon-color[data-v-591b8482] {\n  text-shadow: 0 0 1px #000;\n}\n.icon-color--black[data-v-591b8482] {\n  color: #000;\n}\n.min-height-100[data-v-591b8482] {\n  min-height: 100px;\n}\n.min-height-37[data-v-591b8482] {\n  min-height: 37px;\n}\n[dir] .bg-primary-light[data-v-591b8482] {\n  background-color: #f1f4ff;\n}\n.height-40[data-v-591b8482] {\n  height: 40px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/components/menu/Menu.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/components/menu/Menu.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_591b8482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=591b8482&scoped=true& */ "./resources/js/src/components/menu/Menu.vue?vue&type=template&id=591b8482&scoped=true&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./resources/js/src/components/menu/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Menu_vue_vue_type_style_index_0_id_591b8482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true& */ "./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_591b8482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_591b8482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "591b8482",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/menu/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/menu/Menu.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/menu/Menu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_591b8482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=style&index=0&id=591b8482&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_591b8482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_591b8482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_591b8482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_591b8482_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/menu/Menu.vue?vue&type=template&id=591b8482&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/components/menu/Menu.vue?vue&type=template&id=591b8482&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_591b8482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=591b8482&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/Menu.vue?vue&type=template&id=591b8482&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_591b8482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_591b8482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/menu/helpers/constants.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/menu/helpers/constants.js ***!
  \***************************************************************/
/*! exports provided: materialIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialIcons", function() { return materialIcons; });
var materialIcons = ['3d_rotation', 'ac_unit', 'access_alarm', 'access_alarms', 'access_time', 'accessibility', 'accessibility_new', 'accessible', 'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'account_circle', 'adb', 'add', 'add_a_photo', 'add_alarm', 'add_alert', 'add_box', 'add_circle', 'add_circle_outline', 'add_location', 'add_shopping_cart'];

/***/ })

}]);
//# sourceMappingURL=126.js.map