(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[212],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var dict = {
  custom: {
    pipelineName: {
      required: 'Name is required',
      max_value: "Name's length must be less than 225",
      min_value: "Name's length must be greater than 0"
    }
  }
};
vee_validate__WEBPACK_IMPORTED_MODULE_3__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CreateEditPipelinePopup',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      pipelineName: ''
    };
  },
  computed: {
    togglePopup: {
      get: function get() {
        return this.isActive;
      },
      set: function set(val) {
        if (!val) {
          this.closePopup();
        }
      }
    },
    popupTitle: function popupTitle() {
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.data || {}).length ? 'Rename Pipeline' : 'Add Pipeline';
    },
    editMode: function editMode() {
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.data || {}).length ? true : false;
    },
    validateForm: function validateForm() {
      return !this.errors.any() && this.pipelineName !== '' || this.pipelineName.length > 0 && this.pipelineName.length <= 225;
    }
  },
  methods: {
    closePopup: function closePopup() {
      this.$emit('closePopup');
      this.errors.clear();
    },
    showNotification: function showNotification(message, type) {
      this.$vs.notify({
        color: type,
        title: type == 'danger' ? 'Error' : 'Success',
        text: message
      });
    },
    handleAddandEditPipeline: function () {
      var _handleAddandEditPipeline = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response, payload, _payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                response = null;

                if (!this.editMode) {
                  _context.next = 9;
                  break;
                }

                payload = {
                  id: this.data.id,
                  name: this.pipelineName
                };
                _context.next = 6;
                return this.$store.dispatch('marketing/editPipeline', payload);

              case 6:
                response = _context.sent;
                _context.next = 13;
                break;

              case 9:
                _payload = {
                  name: this.pipelineName
                };
                _context.next = 12;
                return this.$store.dispatch('marketing/createPipeline', _payload);

              case 12:
                response = _context.sent;

              case 13:
                this.$store.dispatch('marketing/updateMarketingPipelines', response.data.payload.pipeline);
                this.closePopup();
                this.showNotification(this.editMode ? 'Pipeline Updated Successfully' : 'New Pipeline Created Successfully', 'primary');
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                this.showNotification(_context.t0.response.message, 'danger');

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 18]]);
      }));

      return function handleAddandEditPipeline() {
        return _handleAddandEditPipeline.apply(this, arguments);
      };
    }()
  },
  watch: {
    isActive: function isActive(val) {
      var _this = this;

      if (val) {
        this.$nextTick(function () {
          _this.pipelineName = (_this.data || {}).name || '';
        });
      }

      this.pipelineName = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "pipeline-popup-active",
    attrs: {
      title: _vm.popupTitle,
      active: _vm.togglePopup
    },
    on: {
      "update:active": function updateActive($event) {
        _vm.togglePopup = $event;
      }
    }
  }, [_c("div", {
    staticClass: "flex flex-col space-y-4"
  }, [_c("div", {
    staticClass: "vx-col w-full"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Pipeline Name")]), _vm._v(" "), _c("vs-input", {
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: "required",
      expression: "'required'"
    }],
    staticClass: "w-full mt-2",
    attrs: {
      "data-vv-validate-on": "blur",
      name: "pipelineName"
    },
    model: {
      value: _vm.pipelineName,
      callback: function callback($$v) {
        _vm.pipelineName = $$v;
      },
      expression: "pipelineName"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-danger text-sm"
  }, [_vm._v(_vm._s(_vm.errors.first("pipelineName")))])], 1), _vm._v(" "), _c("div", {
    staticClass: "flex justify-end space-x-2"
  }, [_c("vs-button", {
    attrs: {
      type: "border"
    },
    on: {
      click: _vm.closePopup
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      disabled: !_vm.validateForm
    },
    on: {
      click: _vm.handleAddandEditPipeline
    }
  }, [_vm._v(_vm._s(_vm.editMode ? "Update" : "Save"))])], 1)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateEditNewPipelinePopup_vue_vue_type_template_id_23a3a4ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true&");
/* harmony import */ var _CreateEditNewPipelinePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateEditNewPipelinePopup.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateEditNewPipelinePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateEditNewPipelinePopup_vue_vue_type_template_id_23a3a4ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateEditNewPipelinePopup_vue_vue_type_template_id_23a3a4ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23a3a4ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditNewPipelinePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateEditNewPipelinePopup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditNewPipelinePopup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditNewPipelinePopup_vue_vue_type_template_id_23a3a4ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/components/CreateEditNewPipelinePopup.vue?vue&type=template&id=23a3a4ea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditNewPipelinePopup_vue_vue_type_template_id_23a3a4ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEditNewPipelinePopup_vue_vue_type_template_id_23a3a4ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=212.js.map