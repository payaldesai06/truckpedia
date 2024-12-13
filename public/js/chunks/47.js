(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/core-js/get-iterator */ "./node_modules/@babel/runtime/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/object/keys */ "./node_modules/@babel/runtime/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/json/stringify */ "./node_modules/@babel/runtime/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);







function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_2___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AddCampaignTemplates',
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_6__["VueEditor"]
  },
  props: {
    template: {
      type: Object,
      default: function _default() {}
    },
    enableButtonValidation: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    originalData: {
      type: Object,
      default: function _default() {}
    },
    showTemplateName: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    disabledSaveButton: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    scheduleData: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      steps: [{
        step: 1,
        nextStepWaitForDays: 1,
        subject: '',
        content: ''
      }],
      activeStep: 0,
      templateName: '',
      editMode: false,
      customToolbar: [[{
        font: []
      }], [{
        header: [false, 1, 2, 3, 4, 5, 6]
      }], ['bold', 'italic', 'underline'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        color: []
      }, {
        background: []
      }], ['link']],
      weekDays: [{
        text: 'Sunday',
        value: 1,
        startTime: null,
        endTime: null
      }, {
        text: 'Monday',
        value: 2,
        startTime: null,
        endTime: null
      }, {
        text: 'Tuesday',
        value: 3,
        startTime: null,
        endTime: null
      }, {
        text: 'Wednesday',
        value: 4,
        startTime: null,
        endTime: null
      }, {
        text: 'Thursday',
        value: 5,
        startTime: null,
        endTime: null
      }, {
        text: 'Friday',
        value: 6,
        startTime: null,
        endTime: null
      }, {
        text: 'Saturday',
        value: 7,
        startTime: null,
        endTime: null
      }],
      timezoneOptions: [{
        label: 'Pacific Time - US and Canada',
        value: 'America/Los_Angeles'
      }, {
        label: 'Mountain Time - US and Canada',
        value: 'America/Edmonton'
      }, {
        label: 'Central Time - US and Canada',
        value: 'America/Winnipeg'
      }, {
        label: 'Eastern Time - US and Canada',
        value: 'America/New_York'
      }, {
        label: 'Atlantic Time',
        value: 'America/Halifax'
      }],
      scheduleDays: new Array(7).fill(false),
      timezone: null,
      configTimeFlatPickr: {
        enableTime: true,
        noCalendar: true,
        time_24hr: true
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapGetters"])('auth', ['user']), {
    activeVariantSubject: {
      get: function get() {
        if (this.activeStep !== null) {
          return this.steps[this.activeStep].subject;
        }

        return '';
      },
      set: function set(value) {
        if (this.activeStep !== null) {
          this.$set(this.steps[this.activeStep], 'subject', value);
        }
      }
    },
    activeVariantContent: {
      get: function get() {
        if (this.activeStep !== null) {
          return this.steps[this.activeStep].content;
        }

        return '';
      },
      set: function set(value) {
        if (this.activeStep !== null) {
          this.$set(this.steps[this.activeStep], 'content', value);
        }
      }
    },
    isSubmitDisabled: function isSubmitDisabled() {
      return this.disabledSaveButton || this.currentRouteName == 'companies-view' && !this.timezone || this.enableButtonValidation && this.editMode && _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(this.originalData) === _babel_runtime_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()(_objectSpread({}, this.template, {
        name: this.templateName
      }));
    },
    currentRouteName: function currentRouteName() {
      return this.$route.name;
    }
  }),
  methods: {
    init: function init() {
      if (_babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(this.template).length) {
        this.editMode = true;
        this.templateName = this.template.name;
        this.steps = this.template.sequences;
      } else {
        this.steps = this.getDefaultSequence();
        this.templateName = '';
      }

      this.setActiveStep(0); // everytime when template changes, step 1 should be active
    },
    initSchedule: function initSchedule() {
      // Initialize the schedule settings
      var _this$scheduleData = this.scheduleData,
          timezone = _this$scheduleData.timezone,
          daysOfWeekTimes = _this$scheduleData.daysOfWeekTimes;
      this.timezone = this.timezoneOptions.find(function (item) {
        return item.value === timezone;
      });
      this.weekDays = this.weekDays.map(function (day) {
        var dayLowerCase = day.text.toLowerCase();
        var startTimeKey = "".concat(dayLowerCase, "StartTime");
        var endTimeKey = "".concat(dayLowerCase, "EndTime");
        return _objectSpread({}, day, {
          startTime: daysOfWeekTimes[startTimeKey] || '',
          endTime: daysOfWeekTimes[endTimeKey] || ''
        });
      });
      this.scheduleDays = this.weekDays.map(function (day) {
        return day.startTime !== '' && day.endTime !== '';
      });
    },
    getDefaultSequence: function getDefaultSequence() {
      return [{
        nextStepWaitForDays: 1,
        subject: '',
        content: ''
      }];
    },
    handleRedirection: function handleRedirection() {
      if (this.currentRouteName == 'companies-view') {
        this.$emit('showCampaigns', false);
      } else {
        this.$router.back();
      }
    },
    addStep: function addStep() {
      var newStep = {
        nextStepWaitForDays: 1,
        subject: '',
        content: ''
      };
      this.steps.push(newStep);
      this.setActiveStep(this.steps.length - 1); // this.$nextTick(() => {
      //   this.$refs.stepsContainer.children[
      //     this.steps.length - 1
      //   ].scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'center',
      //   });
      // });
    },
    confirmRemoveStep: function confirmRemoveStep(index) {
      var _this = this;

      var options = {
        title: 'Confirm Delete',
        color: 'danger',
        text: 'Are you sure you want to delete this step?',
        accept: function accept() {
          return _this.removeStep(index);
        }
      };
      this.$vs.dialog(_objectSpread({
        type: 'confirm',
        color: 'primary',
        acceptText: 'Delete step'
      }, options));
    },
    removeStep: function removeStep(index) {
      this.steps.splice(index, 1);

      if (this.steps.length === 1) {
        this.steps[0].nextStepWaitForDays = 1;
      }

      if (this.activeStep >= this.steps.length) {
        this.setActiveStep(this.steps.length - 1);
      } else {
        this.setActiveStep(0);
      }
    },
    setActiveStep: function setActiveStep(index) {
      this.activeStep = index;
    },
    validateData: function validateData() {
      if (this.showTemplateName && this.templateName === '') {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: "Please fill template name"
        });
        return false;
      }

      var index = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _babel_runtime_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_3___default()(this.steps), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var step = _step.value;

          if (step.subject == '' || step.content == '') {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: "Please fill subject and content in Step ".concat(parseInt(index) + 1)
            });
            return false;
          }

          index++;
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

      if (this.currentRouteName == 'companies-view') {
        for (var ind in this.weekDays) {
          var day = this.weekDays[ind];

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(day.startTime) && Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(day.endTime) || Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(day.startTime) && !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(day.endTime)) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: "Invalid ".concat(day.text, " startTime and endTime")
            });
            return false;
          }

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(day.startTime) && !Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(day.endTime)) {
            var time1 = this.$dayjs("2000-01-01 ".concat(day.startTime));
            var time2 = this.$dayjs("2000-01-01 ".concat(day.endTime));
            var timeDiff = time2.diff(time1);

            if (timeDiff <= 0) {
              this.$vs.notify({
                color: 'danger',
                title: 'Error',
                text: "For ".concat(day.text, ", start time must be earlier than end time")
              });
              return false;
            }
          }
        }

        if (!(this.timezone || {}).value) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Please select a timezone'
          });
          return false;
        }
      }

      return true;
    },
    handleSaveSequence: function handleSaveSequence() {
      if (this.validateData()) {
        var payload = {
          sequences: this.steps.map(function (data) {
            return data.nextStepWaitForDays && _objectSpread({}, data, {
              nextStepWaitForDays: Number(data.nextStepWaitForDays)
            });
          }),
          name: this.templateName
        };

        if (this.currentRouteName == 'companies-view') {
          var daysOfWeekTimes = this.weekDays.reduce(function (acc, day) {
            var dayLowerCase = day.text.toLowerCase();
            acc["".concat(dayLowerCase, "StartTime")] = day.startTime || null;
            acc["".concat(dayLowerCase, "EndTime")] = day.endTime || null;
            return acc;
          }, {});
          payload = _objectSpread({}, payload, {
            timezone: this.timezone.value,
            daysOfWeekTimes: daysOfWeekTimes
          });
        }

        this.$emit('templateSaved', payload);
      }
    },
    applyTimeToEveryday: function applyTimeToEveryday(index) {
      var day = this.weekDays[index];
      this.weekDays = this.weekDays.map(function (item) {
        return _objectSpread({}, item, {
          startTime: day.startTime,
          endTime: day.endTime
        });
      });
    }
  },
  watch: {
    template: {
      handler: function handler(val) {
        this.init();
      },
      immediate: true
    },
    scheduleData: {
      handler: function handler() {
        if (this.currentRouteName == 'companies-view') {
          this.initSchedule();
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "w-1/4"
  }, [_c("div", {
    ref: "stepsContainer",
    class: _vm.steps.length > 2 ? "max-h-45 h-full" : ""
  }, _vm._l(_vm.steps, function (step, index) {
    return _c("div", {
      key: step.id,
      staticClass: "step-box",
      class: {
        "active-step-box": _vm.activeStep === index,
        "no-active-step-box": _vm.activeStep !== index
      },
      on: {
        click: function click($event) {
          return _vm.setActiveStep(index);
        }
      }
    }, [_c("div", {
      staticClass: "flex justify-between items-center"
    }, [_c("p", {
      staticClass: "count-steps"
    }, [_vm._v("Step " + _vm._s(index + 1))]), _vm._v(" "), _vm.steps.length > 1 ? _c("div", {
      staticClass: "delete-step-icon"
    }, [_c("vs-icon", {
      staticClass: "cursor-pointer",
      attrs: {
        size: "small",
        icon: "delete",
        color: "danger"
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.confirmRemoveStep(index);
        }
      }
    })], 1) : _vm._e()]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
      staticClass: "subject-txt"
    }, [_c("span", [_vm._v(_vm._s(step.subject || "< No Subject >") + " ")])]), _vm._v(" "), index + 1 < _vm.steps.length ? _c("div", [_c("vs-divider"), _vm._v(" "), _c("div", {
      staticClass: "flex my-4 gap-2 items-center"
    }, [_vm._v("\n              wait for\n              "), _c("vs-input", {
      staticClass: "delay-day-input",
      attrs: {
        type: "number",
        min: "0"
      },
      model: {
        value: _vm.steps[index].nextStepWaitForDays,
        callback: function callback($$v) {
          _vm.$set(_vm.steps[index], "nextStepWaitForDays", $$v);
        },
        expression: "steps[index].nextStepWaitForDays"
      }
    }), _vm._v("\n              days, then\n            ")], 1)], 1) : _vm._e()], 1);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "add-step",
    on: {
      click: _vm.addStep
    }
  }, [_vm._v("Add Step")])]), _vm._v(" "), _c("div", {
    staticClass: "w-3/4"
  }, [_vm.showTemplateName ? _c("div", {
    staticClass: "template-name-input flex flex-col mt-6 mb-6"
  }, [_c("label", {
    staticClass: "text-xs"
  }, [_vm._v("Template Name")]), _vm._v(" "), _c("vx-input-group", [_c("vs-input", {
    staticClass: "w-full",
    model: {
      value: _vm.templateName,
      callback: function callback($$v) {
        _vm.templateName = $$v;
      },
      expression: "templateName"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _vm.activeStep !== null ? _c("div", {
    staticClass: "send-email-wrap"
  }, [_c("div", {
    staticClass: "send-email-header"
  }, [_c("div", {
    staticClass: "w-75"
  }, [_c("span", [_vm._v("Subject:")]), _vm._v(" "), _c("span", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.activeVariantSubject,
      expression: "activeVariantSubject"
    }],
    attrs: {
      type: "text",
      name: "subject",
      placeholder: "Your subject"
    },
    domProps: {
      value: _vm.activeVariantSubject
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.activeVariantSubject = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("vs-divider", {
    staticClass: "m-0"
  }), _vm._v(" "), _c("div", [_c("vue-editor", {
    staticClass: "custom-toolbar",
    attrs: {
      editorToolbar: _vm.customToolbar,
      placeholder: "Start typing here..."
    },
    model: {
      value: _vm.activeVariantContent,
      callback: function callback($$v) {
        _vm.activeVariantContent = $$v;
      },
      expression: "activeVariantContent"
    }
  })], 1)], 1) : _vm._e()])]), _vm._v(" "), _vm.currentRouteName == "companies-view" ? _c("div", {
    staticClass: "mt-6 mb-20 mx-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row flex justify-between items-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("h5", {
    staticClass: "font-bold"
  }, [_vm._v("Days and Times")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-full flex flex-wrap mt-6"
  }, _vm._l(_vm.weekDays, function (day, index) {
    return _c("div", {
      key: day.value,
      staticClass: "flex gap-2 items-center w-full p-2"
    }, [_c("label", {
      staticStyle: {
        width: "90px"
      },
      attrs: {
        for: day.text
      }
    }, [_vm._v("\n            " + _vm._s(day.text) + "\n          ")]), _vm._v(" "), _c("div", {
      staticClass: "flex gap-2"
    }, [_c("div", {
      staticClass: "relative w-1/2"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      attrs: {
        config: _vm.configTimeFlatPickr,
        placeholder: "Start Time"
      },
      model: {
        value: day.startTime,
        callback: function callback($$v) {
          _vm.$set(day, "startTime", $$v);
        },
        expression: "day.startTime"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "icon-append"
    }, [_c("feather-icon", {
      attrs: {
        icon: "ChevronDownIcon",
        svgClasses: "h-4 w-4"
      }
    })], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "relative w-1/2"
    }, [_c("flat-pickr", {
      staticClass: "w-full",
      attrs: {
        config: _vm.configTimeFlatPickr,
        placeholder: "End Time"
      },
      model: {
        value: day.endTime,
        callback: function callback($$v) {
          _vm.$set(day, "endTime", $$v);
        },
        expression: "day.endTime"
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "icon-append"
    }, [_c("feather-icon", {
      attrs: {
        icon: "ChevronDownIcon",
        svgClasses: "h-4 w-4"
      }
    })], 1)], 1), _vm._v(" "), _c("vs-button", {
      attrs: {
        color: "warning",
        type: "flat",
        size: "small"
      },
      on: {
        click: function click($event) {
          day.startTime = "";
          day.endTime = "";
        }
      }
    }, [_vm._v("\n              Clear\n            ")])], 1), _vm._v(" "), _c("div", [_c("vs-button", {
      attrs: {
        disabled: !(day.startTime && day.endTime),
        color: "primary",
        type: "flat",
        size: "small"
      },
      on: {
        click: function click($event) {
          return _vm.applyTimeToEveryday(index);
        }
      }
    }, [_vm._v("\n              Apply times to everyday\n            ")])], 1)]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "w-1/2 mt-4"
  }, [_c("label", {
    staticClass: "text-sm opacity-75",
    attrs: {
      for: "timezone"
    }
  }, [_vm._v("\n          Timezone\n          "), _c("field-required-sign")], 1), _vm._v(" "), _c("v-select", {
    staticClass: "w-full",
    attrs: {
      name: "timezone",
      options: _vm.timezoneOptions,
      label: "label",
      clearable: true
    },
    model: {
      value: _vm.timezone,
      callback: function callback($$v) {
        _vm.timezone = $$v;
      },
      expression: "timezone"
    }
  })], 1)])], 1) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "flex mt-6 mr-4 flex justify-end"
  }, [_c("vs-button", {
    staticClass: "action-btn mr-4",
    attrs: {
      type: "border"
    },
    on: {
      click: _vm.handleRedirection
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c("vs-button", {
    attrs: {
      disabled: _vm.isSubmitDisabled
    },
    on: {
      click: _vm.handleSaveSequence
    }
  }, [_vm._v("\n      " + _vm._s(_vm.editMode && _vm.currentRouteName !== "companies-view" ? "Update" : "Save"))])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .active-step-box[data-v-3146911f] {\n  border: 2px solid var(--blue-500, #3b82f6);\n}\n[dir] .no-active-step-box[data-v-3146911f] {\n  border: 1px solid gray;\n}\n.step-box[data-v-3146911f] {\n  min-height: 150px;\n}\n[dir] .step-box[data-v-3146911f] {\n  border-radius: 8px;\n  background: var(--gray-50, #f9fafb);\n  margin-bottom: 15px;\n  padding: 15px;\n  padding-bottom: 0px;\n  cursor: pointer;\n}\n.step-box .count-steps[data-v-3146911f] {\n  color: var(--brand-neutrals-black, #000);\n  font-size: 16px;\n  font-weight: 500;\n}\n.step-box .subject-txt[data-v-3146911f] {\n  color: var(--brand-neutrals-black, #000);\n  font-size: 14px;\n  font-weight: 450;\n  min-height: 50px;\n}\n[dir] .step-box .subject-txt[data-v-3146911f] {\n  padding: 0px 16px;\n}\n.step-box .add-variant[data-v-3146911f] {\n  color: var(--primary-blue, #3975eb);\n  font-size: 14px;\n  font-weight: 500;\n}\n[dir] .step-box .add-variant[data-v-3146911f] {\n  text-align: center;\n  padding: 8px;\n  cursor: pointer;\n}\n.add-step[data-v-3146911f] {\n  color: var(--primary-blue, #3975eb);\n  font-size: 16px;\n  font-weight: 500;\n}\n[dir] .add-step[data-v-3146911f] {\n  border-radius: 4px;\n  border: 1px solid var(--gray-300, #d1d5db);\n  padding: 10px 24px;\n  text-align: center;\n  cursor: pointer;\n  margin-top: 15px;\n}\n.delete-step-icon[data-v-3146911f] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[dir] .send-email-wrap[data-v-3146911f] {\n  border-radius: 8px;\n  border: 1px solid var(--gray-200, #e5e7eb);\n  background: var(--brand-neutrals-white, #fff);\n  margin: 15px;\n  margin-top: 0px;\n}\n.send-email-wrap .send-email-header[data-v-3146911f] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir] .send-email-wrap .send-email-header[data-v-3146911f] {\n  padding: 15px;\n}\n.send-email-wrap .send-email-header input[data-v-3146911f] {\n  outline: none;\n  min-width: 75%;\n}\n[dir] .send-email-wrap .send-email-header input[data-v-3146911f] {\n  border: none;\n}\n[dir] .template-name-input[data-v-3146911f] {\n  margin: 15px;\n}\n[dir] .custom-toolbar .ql-toolbar.ql-snow[data-v-3146911f], [dir] .custom-toolbar .ql-container.ql-snow[data-v-3146911f] {\n  border: none;\n}\n.custom-toolbar .ql-container.ql-snow[data-v-3146911f] {\n  min-height: 55vh;\n}\n.delay-day-input[data-v-3146911f] {\n  width: 80px;\n}\n.max-h-45[data-v-3146911f] {\n  max-height: 45vh;\n  overflow-y: auto;\n}\n.icon-append[data-v-3146911f] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  align-items: center;\n  display: flex;\n  align-items: center;\n}\n[dir] .icon-append[data-v-3146911f] {\n  margin: 0.5rem;\n  padding: 0.25rem;\n}\n[dir=ltr] .icon-append[data-v-3146911f] {\n  right: 0;\n  border-left: 1px solid #d1d5db;\n}\n[dir=rtl] .icon-append[data-v-3146911f] {\n  left: 0;\n  border-right: 1px solid #d1d5db;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddCampaignTemplates_vue_vue_type_template_id_3146911f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true& */ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true&");
/* harmony import */ var _AddCampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCampaignTemplates.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddCampaignTemplates_vue_vue_type_style_index_0_id_3146911f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss& */ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddCampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddCampaignTemplates_vue_vue_type_template_id_3146911f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddCampaignTemplates_vue_vue_type_template_id_3146911f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3146911f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCampaignTemplates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_style_index_0_id_3146911f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=style&index=0&id=3146911f&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_style_index_0_id_3146911f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_style_index_0_id_3146911f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_style_index_0_id_3146911f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_style_index_0_id_3146911f_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_template_id_3146911f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue?vue&type=template&id=3146911f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_template_id_3146911f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCampaignTemplates_vue_vue_type_template_id_3146911f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=47.js.map