(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[215],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/helper */ "./resources/js/src/helpers/helper.js");
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/config/constants.js */ "./resources/js/src/config/constants.js");









function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source); if (typeof _babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') { ownKeys = ownKeys.concat(_babel_runtime_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) { return _babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { _babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_3___default()(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_5___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_4___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IncidentNoteTab',
  components: {
    IncidentNotePrompt: function IncidentNotePrompt() {
      return __webpack_require__.e(/*! import() */ 173).then(__webpack_require__.bind(null, /*! ./IncidentNotePrompt.vue */ "./resources/js/src/views/pages/safety/components/IncidentNotePrompt.vue"));
    }
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    notes: function notes() {
      return this.value.notesArray || [];
    }
  },
  data: function data() {
    return {
      loading: false,
      notePrompt: {
        isPromptActive: false,
        data: null
      },
      defaultKey: 0
    };
  },
  methods: {
    getDateTime: function getDateTime(date, time) {
      return "".concat(date || '', " ").concat(time || '').trim();
    },
    getLabel: function getLabel(value) {
      var contactTypeOptions = _config_constants_js__WEBPACK_IMPORTED_MODULE_9__["default"].safetyModule.contactType;
      var type = contactTypeOptions.find(function (item) {
        return item.value === value;
      });
      return type ? type.label : '';
    },
    toggleNotePrompt: function toggleNotePrompt() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.notePrompt = {
        isPromptActive: !this.notePrompt.isPromptActive,
        data: data
      };
    },
    addNote: function () {
      var _addNote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(noteData) {
        var payload, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!this.isEdit) {
                  _context.next = 10;
                  break;
                }

                payload = {
                  incidentId: this.value.incidentId || null,
                  localDate: noteData.localDate || null,
                  localTime: noteData.localTime || null,
                  note: noteData.note || null,
                  contactType: noteData.contactType || null,
                  name: noteData.name || null,
                  phone: noteData.phone || null,
                  email: noteData.email || null
                };
                _context.next = 5;
                return this.$store.dispatch('incidents/createNote', payload);

              case 5:
                _ref = _context.sent;
                data = _ref.data;

                if (data.payload && data.payload.noteId) {
                  this.value.notesArray = _toConsumableArray(this.value.notesArray).concat([{
                    noteId: data.payload.noteId,
                    localDate: noteData.localDate || null,
                    localTime: noteData.localTime || null,
                    contactType: noteData.contactType || null,
                    note: noteData.note || null,
                    name: noteData.name || null,
                    phone: noteData.phone || null,
                    email: noteData.email || null
                  }]);
                }

                _context.next = 11;
                break;

              case 10:
                this.value.notesArray = _toConsumableArray(this.value.notesArray || []).concat([{
                  noteId: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getUniqueIdV4"])(),
                  localDate: noteData.localDate || null,
                  localTime: noteData.localTime || null,
                  note: noteData.note || null,
                  contactType: noteData.contactType || null,
                  name: noteData.name || null,
                  phone: noteData.phone || null,
                  email: noteData.email || null
                }]);

              case 11:
                this.toggleNotePrompt();
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context.t0)
                });

              case 17:
                _context.prev = 17;
                return _context.finish(17);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 14, 17, 19]]);
      }));

      return function addNote(_x) {
        return _addNote.apply(this, arguments);
      };
    }(),
    editNote: function () {
      var _editNote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2(noteId) {
        var noteData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                noteData = ((this.value || {}).notesArray || []).find(function (note) {
                  return note.noteId === noteId;
                });

                if (noteData) {
                  this.toggleNotePrompt(noteData);
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function editNote(_x2) {
        return _editNote.apply(this, arguments);
      };
    }(),
    updateNote: function () {
      var _updateNote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(noteData) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!this.isEdit) {
                  _context3.next = 8;
                  break;
                }

                payload = {
                  incidentId: this.value.incidentId || null,
                  noteId: noteData.noteId,
                  localDate: noteData.localDate,
                  localTime: noteData.localTime,
                  note: noteData.note,
                  contactType: noteData.contactType || null,
                  name: noteData.name,
                  phone: noteData.phone,
                  email: noteData.email
                };
                _context3.next = 5;
                return this.$store.dispatch('incidents/updateNote', payload);

              case 5:
                this.value.notesArray = this.value.notesArray.map(function (note) {
                  if (note.noteId === noteData.noteId) {
                    return _objectSpread({}, note, {
                      localDate: noteData.localDate,
                      localTime: noteData.localTime,
                      note: noteData.note,
                      contactType: noteData.contactType || null,
                      name: noteData.name,
                      phone: noteData.phone,
                      email: noteData.email
                    });
                  }

                  return note;
                });
                _context3.next = 9;
                break;

              case 8:
                this.value.notesArray = this.value.notesArray.map(function (note) {
                  if (note.noteId === noteData.noteId) {
                    return _objectSpread({}, note, {
                      localDate: noteData.localDate,
                      localTime: noteData.localTime,
                      note: noteData.note,
                      contactType: noteData.contactType || null,
                      name: noteData.name,
                      phone: noteData.phone,
                      email: noteData.email
                    });
                  }

                  return note;
                });

              case 9:
                this.toggleNotePrompt();
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context3.t0)
                });

              case 15:
                _context3.prev = 15;
                return _context3.finish(15);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 12, 15, 17]]);
      }));

      return function updateNote(_x3) {
        return _updateNote.apply(this, arguments);
      };
    }(),
    deleteNote: function deleteNote(noteId) {
      this.$vs.dialog({
        color: 'danger',
        title: 'Delete Note',
        text: 'Are you sure you want to delete this note?',
        accept: this.deleteNoteFromIncident.bind(this, noteId)
      });
    },
    deleteNoteFromIncident: function () {
      var _deleteNoteFromIncident = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4(noteId) {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!this.isEdit) {
                  _context4.next = 8;
                  break;
                }

                payload = {
                  incidentId: this.value.incidentId || null,
                  noteId: noteId
                };
                _context4.next = 5;
                return this.$store.dispatch('incidents/deleteNote', payload);

              case 5:
                this.value.notesArray = this.value.notesArray.filter(function (note) {
                  return note.noteId !== noteId;
                });
                _context4.next = 9;
                break;

              case 8:
                this.value.notesArray = this.value.notesArray.filter(function (note) {
                  return note.noteId !== noteId;
                });

              case 9:
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                this.$vs.notify({
                  time: 8000,
                  color: 'danger',
                  title: 'Error',
                  text: Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_8__["getApiErrorMsg"])(_context4.t0)
                });

              case 14:
                _context4.prev = 14;
                return _context4.finish(14);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 11, 14, 16]]);
      }));

      return function deleteNoteFromIncident(_x4) {
        return _deleteNoteFromIncident.apply(this, arguments);
      };
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-4"
  }, [_c("vx-card", [_c("div", {
    staticClass: "vx-row justify-end"
  }, [_c("div", {
    staticClass: "vx-col"
  }, [_c("vs-button", {
    attrs: {
      color: "primary",
      type: "border",
      size: "small",
      icon: "add"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.toggleNotePrompt();
      }
    }
  }, [_vm._v("\n          ADD NOTE\n        ")])], 1)]), _vm._v(" "), _c("vs-divider"), _vm._v(" "), _c("div", {
    staticClass: "vx-row mx-auto"
  }, [_c("DataTable", {
    key: _vm.defaultKey,
    staticClass: "w-full",
    attrs: {
      value: _vm.notes,
      filterDisplay: "row",
      loading: _vm.loading,
      responsiveLayout: "scroll",
      lazy: true
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("b", [_vm._v("No records found")])];
      },
      proxy: true
    }])
  }, [_c("Column", {
    attrs: {
      header: "",
      headerStyle: {
        width: "0.5rem"
      }
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref) {
        var data = _ref.data;
        return [_c("div", {
          staticClass: "flex items-center gap-1"
        }, [_c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "delete",
            size: "small"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.deleteNote(data.noteId);
            }
          }
        }), _vm._v(" "), _c("vs-icon", {
          staticClass: "cursor-pointer",
          attrs: {
            icon: "edit",
            size: "small"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.editNote(data.noteId);
            }
          }
        })], 1)];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "",
      header: "Date",
      headerStyle: {
        minWidth: "140px"
      },
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref2) {
        var _ref2$data = _ref2.data,
            localDate = _ref2$data.localDate,
            localTime = _ref2$data.localTime;
        return [_c("div", [_c("span", [_vm._v("\n                " + _vm._s(_vm.getDateTime(localDate, localTime)) + "\n              ")])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "contactType",
      header: "Contact Type",
      headerStyle: {
        minWidth: "140px"
      },
      showFilterMenu: false,
      sortable: false
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref3) {
        var contactType = _ref3.data.contactType;
        return [_c("div", [_c("span", [_vm._v("\n                " + _vm._s(_vm.getLabel(contactType)) + "\n              ")])])];
      }
    }])
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "name",
      header: "Name",
      headerStyle: {
        minWidth: "140px"
      },
      showFilterMenu: false,
      sortable: false
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "phone",
      header: "Phone",
      headerStyle: {
        minWidth: "140px"
      },
      showFilterMenu: false,
      sortable: false
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "email",
      header: "Email",
      headerStyle: {
        minWidth: "140px"
      },
      showFilterMenu: false,
      sortable: false
    }
  }), _vm._v(" "), _c("Column", {
    attrs: {
      field: "note",
      header: "Note",
      showFilterMenu: false,
      sortable: false,
      bodyStyle: {}
    },
    scopedSlots: _vm._u([{
      key: "body",
      fn: function fn(_ref4) {
        var note = _ref4.data.note;
        return [_c("div", [_c("span", [_vm._v("\n                " + _vm._s(note) + "\n              ")])])];
      }
    }])
  })], 1)], 1)], 1), _vm._v(" "), _c("incident-note-prompt", {
    attrs: {
      isPromptActive: _vm.notePrompt.isPromptActive,
      noteData: _vm.notePrompt.data
    },
    on: {
      onClose: _vm.toggleNotePrompt,
      onAccept: _vm.addNote,
      "onAccept:Update": _vm.updateNote
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IncidentNoteTab_vue_vue_type_template_id_1cd006a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true& */ "./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true&");
/* harmony import */ var _IncidentNoteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IncidentNoteTab.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IncidentNoteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IncidentNoteTab_vue_vue_type_template_id_1cd006a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IncidentNoteTab_vue_vue_type_template_id_1cd006a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1cd006a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/safety/components/IncidentNoteTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentNoteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentNoteTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentNoteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentNoteTab_vue_vue_type_template_id_1cd006a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/safety/components/IncidentNoteTab.vue?vue&type=template&id=1cd006a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentNoteTab_vue_vue_type_template_id_1cd006a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_IncidentNoteTab_vue_vue_type_template_id_1cd006a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=215.js.map