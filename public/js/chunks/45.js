(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    spreadsheetId: {
      required: true
    }
  },
  data: function data() {
    return {
      selectedUser: "",
      accessLevel: "",
      users: [],
      accessLevelOption: [{
        text: "Admin",
        value: 'admin',
        desc: 'Can fully configure and edit this spreadsheet'
      }, {
        text: "Editor",
        value: 'editor',
        desc: 'Can only edit cell values'
      }, {
        text: "Viewer",
        value: 'viewer',
        desc: 'Read-only, cannot edit'
      }, {
        text: "No Access",
        value: null,
        desc: 'Can not access this spreadsheet'
      }]
    };
  },
  methods: {
    getUsersAccessLevel: function getUsersAccessLevel() {
      var _this = this;

      this.selectedUser = "";
      this.accessLevel = "";
      this.users = [];
      var payload = {
        id: this.spreadsheetId
      };
      this.$store.dispatch('spreadsheet/getAccessDetails', payload).then(function (_ref) {
        var data = _ref.data;
        _this.users = data.payload.companyUsers;
      }).catch(function (error) {
        _this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      });
    },
    updateAccessLevel: function updateAccessLevel() {
      var _this2 = this;

      this.$vs.loading();
      var payload = {
        id: this.spreadsheetId,
        userId: this.selectedUser.userId,
        accessLevel: this.accessLevel.value
      };
      this.$store.dispatch('spreadsheet/updateAccessLevel', payload).then(function (_ref2) {
        var data = _ref2.data;

        _this2.$vs.notify({
          color: "success",
          title: "Access Level",
          text: 'Access level successfully updated'
        });
      }).catch(function (error) {
        _this2.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      }).finally(function () {
        _this2.$vs.loading.close();

        _this2.getUsersAccessLevel();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
    staticStyle: {
      "min-height": "280px"
    }
  }, [_c("div", {
    staticClass: "flex items-center justify-center space-x-2"
  }, [_c("div", {
    staticClass: "w-full"
  }, [_c("multiselect", {
    attrs: {
      placeholder: "Select user",
      options: _vm.users,
      label: "name",
      "allow-empty": false,
      "show-labels": false
    },
    model: {
      value: _vm.selectedUser,
      callback: function callback($$v) {
        _vm.selectedUser = $$v;
      },
      expression: "selectedUser"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("multiselect", {
    attrs: {
      placeholder: "Select access level",
      label: "text",
      options: _vm.accessLevelOption,
      "allow-empty": false,
      "show-labels": false
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "option__desc"
        }, [_c("span", [_vm._v(_vm._s(props.option.text))]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
          staticClass: "option__small"
        }, [_vm._v(_vm._s(props.option.desc))])])];
      }
    }]),
    model: {
      value: _vm.accessLevel,
      callback: function callback($$v) {
        _vm.accessLevel = $$v;
      },
      expression: "accessLevel"
    }
  })], 1), _vm._v(" "), _c("div", [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "filled"
    },
    on: {
      click: _vm.updateAccessLevel
    }
  }, [_vm._v("Confirm")])], 1)]), _vm._v(" "), _c("div", [_c("vs-list", [_c("vs-list-header", {
    attrs: {
      title: "Users",
      color: "primary"
    }
  }), _vm._v(" "), _vm._l(_vm.users, function (user) {
    return _c("div", {
      key: user.id,
      attrs: {
        title: ""
      }
    }, [user.accessLevel ? _c("div", {
      staticClass: "flex items-center"
    }, [_c("vs-avatar", {
      attrs: {
        color: "primary"
      }
    }), _vm._v(" "), _c("div", [_vm._v("\n            Shared with " + _vm._s(user.name) + " : "), _c("span", {
      staticClass: "capitalize"
    }, [_vm._v(_vm._s(user.accessLevel))])])], 1) : _vm._e()]);
  })], 2)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".option__small{\n  width: 50px;\n  white-space: normal;\n  font-size: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css&");

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

/***/ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareSpreadsheetPopup_vue_vue_type_template_id_dcef5e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14& */ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14&");
/* harmony import */ var _ShareSpreadsheetPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareSpreadsheetPopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShareSpreadsheetPopup_vue_vue_type_style_index_0_id_dcef5e14_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css& */ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShareSpreadsheetPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShareSpreadsheetPopup_vue_vue_type_template_id_dcef5e14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShareSpreadsheetPopup_vue_vue_type_template_id_dcef5e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareSpreadsheetPopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_style_index_0_id_dcef5e14_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader??ref--7-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--7-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=style&index=0&id=dcef5e14&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_style_index_0_id_dcef5e14_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_style_index_0_id_dcef5e14_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_style_index_0_id_dcef5e14_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_style_index_0_id_dcef5e14_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_template_id_dcef5e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/calender/components/ShareSpreadsheetPopup.vue?vue&type=template&id=dcef5e14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_template_id_dcef5e14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareSpreadsheetPopup_vue_vue_type_template_id_dcef5e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=45.js.map