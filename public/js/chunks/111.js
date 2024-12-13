(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AcceptReferral",
  data: function data() {
    return {
      referralCode: ""
    };
  },
  methods: {
    acceptInvite: function acceptInvite() {
      if (this.$route.query.id) {
        window.open("https://calendly.com/ezpapel/demo?a7=".concat(this.$route.query.id), "_blank");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=template&id=829e3c88&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=template&id=829e3c88& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "referral"
  }, [_c("div", {
    staticClass: "container p-12"
  }, [_c("div", {
    staticClass: "referral-box lg:w-1/2"
  }, [_c("img", {
    staticStyle: {
      width: "200px"
    },
    attrs: {
      src: __webpack_require__(/*! @assets/images/logo/ic_logo_text.png */ "./resources/assets/images/logo/ic_logo_text.png")
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "invite"
  }, [_vm._v("YOU’VE BEEN INVITED")]), _vm._v(" "), _c("div", {
    staticClass: "referral-content mt-5"
  }, [_vm._v("\n        Get up to $1000 in reward when you become a Ezpapel customer\n      ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "mt-12",
    attrs: {
      color: "primary",
      type: "filled",
      size: "large"
    },
    on: {
      click: _vm.acceptInvite
    }
  }, [_vm._v("Accept Invite")])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".referral {\n  height: 100vh;\n  width: 100vw;\n}[dir] .referral {\n  background-image: url(" + escape(__webpack_require__(/*! ../../../../../../../../assets/images/logo/circles.svg */ "./resources/assets/images/logo/circles.svg")) + ");\n  background-repeat: no-repeat;\n  background-color: #00253b;\n}[dir=ltr] .referral {\n  background-position: left bottom;\n}[dir=rtl] .referral {\n  background-position: right bottom;\n}\n.referral .invite {\n  color: #77beff;\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n[dir] .referral .invite {\n  margin-top: 80px;\n}\n.referral .referral-content {\n  line-height: 60px;\n  font-size: 40px;\n  color: #fff;\n  font-weight: 500;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/assets/images/logo/circles.svg":
/*!**************************************************!*\
  !*** ./resources/assets/images/logo/circles.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/circles.svg?aee0cc278a5211a92c1fb48d3750d91f";

/***/ }),

/***/ "./resources/assets/images/logo/ic_logo_text.png":
/*!*******************************************************!*\
  !*** ./resources/assets/images/logo/ic_logo_text.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/ic_logo_text.png?690cbaca1c5a4f2206de044133b0c92b";

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AcceptReferral_vue_vue_type_template_id_829e3c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AcceptReferral.vue?vue&type=template&id=829e3c88& */ "./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=template&id=829e3c88&");
/* harmony import */ var _AcceptReferral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AcceptReferral.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AcceptReferral_vue_vue_type_style_index_0_id_829e3c88_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss& */ "./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AcceptReferral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AcceptReferral_vue_vue_type_template_id_829e3c88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AcceptReferral_vue_vue_type_template_id_829e3c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptReferral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_style_index_0_id_829e3c88_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=style&index=0&id=829e3c88&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_style_index_0_id_829e3c88_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_style_index_0_id_829e3c88_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_style_index_0_id_829e3c88_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_style_index_0_id_829e3c88_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=template&id=829e3c88&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=template&id=829e3c88& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_template_id_829e3c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AcceptReferral.vue?vue&type=template&id=829e3c88& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/account-settings/company/referrals/components/AcceptReferral.vue?vue&type=template&id=829e3c88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_template_id_829e3c88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AcceptReferral_vue_vue_type_template_id_829e3c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=111.js.map