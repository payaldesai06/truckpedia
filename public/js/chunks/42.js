(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MenuShare',
  props: {
    sharedWith: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    accessLevels: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    allUsers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showPrivateCheckbox: {
      type: Boolean,
      default: false
    },
    isPrivate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      sharedUsersList: [],
      usersList: [],
      isRecordPrivate: false
    };
  },
  methods: {
    onSharedUsersChange: function onSharedUsersChange() {
      this.$emit('change', {
        isPrivate: this.isRecordPrivate,
        sharedPermissions: this.sharedUsersList
      });
    },
    changeAccessPermission: function changeAccessPermission(id, accessLevel) {
      var user = this.sharedUsersList.find(function (user) {
        return user.id === id;
      });
      user.accessLevel = accessLevel;
      this.onSharedUsersChange();
    },
    sentenceCase: function sentenceCase(str) {
      return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
  },
  watch: {
    sharedWith: {
      handler: function handler() {
        var _this = this;

        this.sharedUsersList = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.sharedWith);
        this.usersList = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(this.allUsers).map(function (user) {
          if (_this.sharedUsersList.length) {
            var sharedUser = _this.sharedUsersList.find(function (shared) {
              return shared.id === user.id;
            });

            if (sharedUser) return sharedUser;
          }

          return user;
        });
      },
      immediate: true
    },
    isPrivate: {
      handler: function handler() {
        this.isRecordPrivate = this.isPrivate;
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true& ***!
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
    staticClass: "w-full"
  }, [_vm.showPrivateCheckbox ? _c("div", {
    staticClass: "vx-col w-full flex items-center mb-5 mt-2"
  }, [_c("div", {
    staticClass: "w-full flex items-center justify-center"
  }, [_c("label", {
    staticClass: "mx-4 w-1/4 text-right",
    domProps: {
      textContent: _vm._s("Private Submenu:")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "w-1/2"
  }, [_c("Checkbox", {
    attrs: {
      binary: true
    },
    on: {
      change: _vm.onSharedUsersChange
    },
    model: {
      value: _vm.isRecordPrivate,
      callback: function callback($$v) {
        _vm.isRecordPrivate = $$v;
      },
      expression: "isRecordPrivate"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "vx-col w-full flex items-center"
  }, [_c("div", {
    staticClass: "w-full flex items-center justify-center"
  }, [_c("label", {
    staticClass: "mx-4 w-1/4 text-right",
    domProps: {
      textContent: _vm._s("Share only with:")
    }
  }), _vm._v(" "), _c("MultiSelect", {
    staticClass: "w-1/2",
    attrs: {
      options: _vm.usersList,
      optionLabel: "fullName",
      placeholder: "Select Users",
      scrollHeight: "140px",
      filter: true
    },
    on: {
      change: _vm.onSharedUsersChange
    },
    model: {
      value: _vm.sharedUsersList,
      callback: function callback($$v) {
        _vm.sharedUsersList = $$v;
      },
      expression: "sharedUsersList"
    }
  })], 1)]), _vm._v(" "), _vm.sharedUsersList.length ? _c("div", {
    staticClass: "vx-col w-full mt-5 height-200"
  }, [_c("DataTable", {
    attrs: {
      value: _vm.sharedUsersList,
      responsiveLayout: "scroll",
      scrollHeight: "200px"
    }
  }, [_c("Column", {
    attrs: {
      field: "fullName",
      header: "Name"
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "accessLevel",
      header: "Access Level"
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var _ref$data = _ref.data,
            accessLevel = _ref$data.accessLevel,
            id = _ref$data.id;
        return [_c("vs-dropdown", [_c("a", {
          staticClass: "a-icon",
          attrs: {
            href: "#"
          }
        }, [_vm._v("\n              " + _vm._s(_vm.sentenceCase(accessLevel)) + "\n              "), _c("vs-icon", {
          attrs: {
            icon: "expand_more"
          }
        })], 1), _vm._v(" "), _c("vs-dropdown-menu", _vm._l(_vm.accessLevels, function (item) {
          return _c("vs-dropdown-item", {
            key: item.id,
            on: {
              click: function click($event) {
                return _vm.changeAccessPermission(id, item.value);
              }
            }
          }, [_vm._v("\n                " + _vm._s(item.label) + "\n              ")]);
        }), 1)], 1)];
      }
    }], null, false, 2124658762)
  })], 1)], 1) : _c("div", {
    staticClass: "vx-col w-full"
  }, [_vm._m(0)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "w-full mt-5 height-200 overflow-x-auto border-gray rounded p-2 mt-2 shared-users-list"
  }, [_c("label", [_vm._v("Not sharing with anyone")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-c9e27bb2] .p-datatable .p-datatable-thead th:nth-child(2) {\n  width: 150px;\n}\n[data-v-c9e27bb2] .vs-con-dropdown a {\n  display: flex;\n  align-items: center;\n}\n.height-200[data-v-c9e27bb2] {\n  height: 200px;\n}\n[dir] .border-gray[data-v-c9e27bb2] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true&");

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

/***/ "./resources/js/src/components/menu/components/MenuShare.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/menu/components/MenuShare.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuShare_vue_vue_type_template_id_c9e27bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true& */ "./resources/js/src/components/menu/components/MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true&");
/* harmony import */ var _MenuShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuShare.vue?vue&type=script&lang=js& */ "./resources/js/src/components/menu/components/MenuShare.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MenuShare_vue_vue_type_style_index_0_id_c9e27bb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true& */ "./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MenuShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuShare_vue_vue_type_template_id_c9e27bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuShare_vue_vue_type_template_id_c9e27bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c9e27bb2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/menu/components/MenuShare.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/menu/components/MenuShare.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/components/menu/components/MenuShare.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShare.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_style_index_0_id_c9e27bb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=style&index=0&id=c9e27bb2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_style_index_0_id_c9e27bb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_style_index_0_id_c9e27bb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_style_index_0_id_c9e27bb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_style_index_0_id_c9e27bb2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/components/menu/components/MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/components/menu/components/MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_template_id_c9e27bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/menu/components/MenuShare.vue?vue&type=template&id=c9e27bb2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_template_id_c9e27bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuShare_vue_vue_type_template_id_c9e27bb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=42.js.map