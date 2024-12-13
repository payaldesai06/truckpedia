(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[231],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var dict = {
  custom: {
    note: {
      required: "Cannot submit an empty value as note."
    }
  }
}; // Register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NotesSection",
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: {
      handler: function handler(newVal) {
        this.notes = newVal || [];
      },
      deep: true,
      immediate: true
    },
    notes: function notes(newVal) {
      this.$emit("input", newVal);
    },
    hasErrorInNotes: function hasErrorInNotes(newVal) {
      var _this = this;

      if (newVal) {
        this.errorMessage = newVal;
        setTimeout(function () {
          _this.errorMessage = null;
        }, 3000);
        this.errors.remove("note");
      }
    }
  },
  data: function data() {
    return {
      notes: [],
      note: null,
      addNewNote: false,
      errorMessage: null
    };
  },
  computed: {
    hasErrorInNotes: function hasErrorInNotes() {
      return this.errors.first("note");
    }
  },
  methods: {
    addNote: function () {
      var _addNote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$validator.validateAll();

              case 2:
                if (this.note) {
                  this.notes.push({
                    id: null,
                    note: this.note
                  });
                  this.note = "";
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function addNote() {
        return _addNote.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=template&id=0ea41ae4&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=template&id=0ea41ae4& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vx-card", [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Notes")])]), _vm._v(" "), _c("div", {
    staticClass: "vx-col flex"
  }, [_c("vs-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.addNewNote,
      expression: "!addNewNote"
    }],
    attrs: {
      color: "primary",
      size: "small",
      type: "border"
    },
    on: {
      click: function click($event) {
        _vm.addNewNote = true;
      }
    }
  }, [_vm._v("\n        ADD NOTE\n      ")]), _vm._v(" "), _c("vs-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.addNewNote,
      expression: "addNewNote"
    }],
    attrs: {
      color: "primary",
      size: "small",
      type: "border",
      icon: "done"
    },
    on: {
      click: _vm.addNote
    }
  }), _vm._v(" "), _c("vs-button", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.addNewNote,
      expression: "addNewNote"
    }],
    staticClass: "ml-1",
    attrs: {
      color: "danger",
      size: "small",
      type: "border",
      icon: "close"
    },
    on: {
      click: function click($event) {
        _vm.addNewNote = false;
      }
    }
  })], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.addNewNote,
      expression: "addNewNote"
    }],
    staticClass: "vx-col w-full"
  }, [_c("vs-textarea", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full",
    attrs: {
      placeholder: "Enter Note",
      name: "note",
      "data-vv-validate-on": "change"
    },
    model: {
      value: _vm.note,
      callback: function callback($$v) {
        _vm.note = $$v;
      },
      expression: "note"
    }
  }), _vm._v(" "), _vm.errorMessage ? _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v("\n        " + _vm._s(_vm.errorMessage) + "\n      ")]) : _vm._e()], 1)]), _vm._v(" "), _vm.notes.length > 0 ? _c("div", {
    staticClass: "vx-row max-height-120 overflow-auto"
  }, _vm._l(_vm.notes, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "vx-col w-full"
    }, [_c("label", {
      staticClass: "text-xs"
    }, [_vm._v(_vm._s(item.note))])]);
  }), 0) : _c("div", {
    staticClass: "vx-row"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs break-words"
  }, [_vm._v("There are no notes yet")])])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotesSection_vue_vue_type_template_id_0ea41ae4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesSection.vue?vue&type=template&id=0ea41ae4& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=template&id=0ea41ae4&");
/* harmony import */ var _NotesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesSection.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotesSection_vue_vue_type_template_id_0ea41ae4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotesSection_vue_vue_type_template_id_0ea41ae4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=template&id=0ea41ae4&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=template&id=0ea41ae4& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesSection_vue_vue_type_template_id_0ea41ae4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesSection.vue?vue&type=template&id=0ea41ae4& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/trucks/components/TruckOverview/NotesSection.vue?vue&type=template&id=0ea41ae4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesSection_vue_vue_type_template_id_0ea41ae4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesSection_vue_vue_type_template_id_0ea41ae4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=231.js.map