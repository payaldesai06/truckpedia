(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'add-note-button',
  props: {
    text: {
      type: String,
      default: function _default() {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddBtn_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBtn.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue");
/* harmony import */ var _notes_AddNotes_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes/AddNotes.vue */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue");



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Notes',
  components: {
    AddNotes: _notes_AddNotes_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddBtn: _AddBtn_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isAddBoxShowing: false,
      notes: [],
      dealId: null,
      selectedNoteDetails: {},
      currentpage: 1,
      pageSize: 10,
      totalNotes: 0,
      paginationMetaData: null
    };
  },
  created: function created() {
    this.dealId = Number(this.$route.params.id);
    this.getDealNotes();
  },
  computed: {
    footerText: function footerText() {
      var _ref = this.paginationMetaData || {},
          currentPage = _ref.currentPage,
          totalPage = _ref.totalPage,
          totalItems = _ref.totalItems;

      if (totalPage && totalItems) {
        return "Displaying ".concat(Number(currentPage), " to ").concat(totalPage, " of ").concat(totalItems, " records");
      }

      return '';
    },
    convertUtcToLocal: function convertUtcToLocal() {
      var _this = this;

      return function (utc) {
        return _this.$dayjs.utc(utc).local().format('MM/DD/YYYY hh:mm A');
      };
    }
  },
  watch: {
    currentpage: 'getDealNotes'
  },
  methods: {
    getDealNotes: function () {
      var _getDealNotes = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var payload, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  id: this.dealId,
                  fields: ['type', 'createdBy', 'content', 'createdAt'],
                  page: this.currentpage,
                  pageSize: this.pageSize
                };
                _context.next = 3;
                return this.$store.dispatch('marketing/getMarketingDealNotes', payload);

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;

                if (data.result) {
                  this.isAddBoxShowing = false;
                  this.notes = data.payload.notes;
                  this.selectedNoteDetails = {};
                  this.totalNotes = data.payload.meta.totalPage;
                  this.paginationMetaData = data.payload.meta;
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getDealNotes() {
        return _getDealNotes.apply(this, arguments);
      };
    }(),
    toggleShowBox: function toggleShowBox(val) {
      this.selectedNoteDetails = {};
      this.isAddBoxShowing = val;
    },
    toggleDescription: function toggleDescription(index) {
      this.notes[index].showDescription = !this.notes[index].showDescription;
    },
    editNote: function editNote(note) {
      this.selectedNoteDetails = note;
      this.isAddBoxShowing = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'add-notes',
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_3__["VueEditor"]
  },
  props: {
    isShow: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    noteDetails: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      content: '',
      createTodotask: false,
      customToolbar: [[{
        font: []
      }], // [{ header: [false, 1, 2, 3, 4, 5, 6] }],
      ['bold', 'italic', 'underline']],
      dealId: null
    };
  },
  mounted: function mounted() {
    this.dealId = Number(this.$route.params.id);
  },
  watch: {
    noteDetails: {
      handler: function handler(val) {
        this.content = val.content;
      }
    }
  },
  computed: {
    isEdit: function isEdit() {
      return _babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(this.noteDetails).length > 0;
    },
    isSubmitDisabled: function isSubmitDisabled() {
      if (this.isEdit && this.content === this.noteDetails.content) {
        return true;
      }

      return !this.content || this.showErrorMessage;
    }
  },
  methods: {
    onClose: function onClose() {
      this.content = '';
      this.showErrorMessage = false;
      this.$emit('toggleShowBox');
    },
    createPayload: function createPayload() {
      if (this.isEdit) {
        return {
          id: this.dealId,
          noteId: this.noteDetails.id,
          content: this.content || null
        };
      } else {
        return {
          id: this.dealId,
          type: 'note',
          content: this.content
        };
      }
    },
    saveOrUpdateDealNotes: function () {
      var _saveOrUpdateDealNotes = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var action, payload, _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.showErrorMessage) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (this.content) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.prev = 4;
                action = this.isEdit ? 'marketing/updateMarketingDealNotes' : 'marketing/createMarketingDealNotes';
                payload = this.createPayload();
                _context.next = 9;
                return this.$store.dispatch(action, payload);

              case 9:
                _ref = _context.sent;
                data = _ref.data;

                if (data.result) {
                  this.$vs.notify({
                    time: 8000,
                    color: 'success',
                    title: 'Success',
                    text: !this.isEdit ? 'Note created successfully' : 'Note content updated successfully'
                  });
                  this.$emit('getDealNotes');
                } else {
                  this.handleApiError('Failed to update deal notes');
                }

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);
                this.handleApiError('An error occurred while updating deal notes', _context.t0);

              case 17:
                _context.prev = 17;
                this.showErrorMessage = false;
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14, 17, 20]]);
      }));

      return function saveOrUpdateDealNotes() {
        return _saveOrUpdateDealNotes.apply(this, arguments);
      };
    }(),
    handleApiError: function handleApiError(errorMessage) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.$vs.notify({
        time: 8000,
        color: 'error',
        title: 'Error',
        text: errorMessage
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("vs-button", _vm._b({
    staticClass: "vs-con-loading__container add-note-btn",
    attrs: {
      color: "primary",
      type: "border",
      "icon-pack": "feather",
      icon: "icon-plus",
      size: "small",
      id: "new-note-button"
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("onClick");
      }
    }
  }, "vs-button", _vm.$attrs, false), [_vm._v("\n  " + _vm._s(_vm.text) + "\n")]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=template&id=3e22a52d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=template&id=3e22a52d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "notes"
  }, [_vm.notes && _vm.notes.length ? [_c("div", {
    staticClass: "mb-4 flex justify-end"
  }, [_c("AddBtn", {
    attrs: {
      text: "New Note"
    },
    on: {
      onClick: function onClick($event) {
        return _vm.toggleShowBox(true);
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "accordions flex flex-col gap-2"
  }, [_vm._l(_vm.notes, function (note, index) {
    return _c("div", {
      key: index,
      staticClass: "accordion-item flex justify-between p-3 bg-white rounded-md w-full"
    }, [_c("div", {
      staticClass: "flex w-full cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.toggleDescription(index);
        }
      }
    }, [_c("div", {
      staticClass: "note-item-content flex-1"
    }, [_c("div", {
      staticClass: "flex justify-between"
    }, [_c("h6", [_vm._v("Note by " + _vm._s(note.createdBy.name))]), _vm._v(" "), _c("small", [_vm._v("\n                Created at " + _vm._s(_vm.convertUtcToLocal(note.createdAt)) + "\n              ")])]), _vm._v(" "), _c("div", {
      class: ["note-description"]
    }, [_c("small", {
      domProps: {
        innerHTML: _vm._s(note.content)
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "flex items-center justify-between"
    }, [_c("vs-dropdown", {
      staticClass: "cursor-pointer ml-2",
      attrs: {
        "vs-custom-content": "",
        "vs-trigger-click": ""
      }
    }, [_c("vs-icon", {
      staticClass: "rotate-90-degree",
      attrs: {
        icon: "more_horiz"
      }
    }), _vm._v(" "), _c("vs-dropdown-menu", [_c("vs-dropdown-item", {
      on: {
        click: function click($event) {
          return _vm.editNote(note);
        }
      }
    }, [_c("div", {
      staticClass: "m-2 cursor-pointer hover:text-primary"
    }, [_c("span", {
      staticClass: "cursor-pointer ml-2"
    }, [_vm._v("Edit\n                    ")])])])], 1)], 1)], 1)])]);
  }), _vm._v(" "), [_c("div", {
    staticClass: "flex justify-between items-center"
  }, [_vm.footerText ? _c("div", [_c("div", {
    staticClass: "whitespace-no-wrap"
  }, [_vm._v(_vm._s(_vm.footerText))])]) : _vm._e(), _vm._v(" "), _c("vs-pagination", {
    attrs: {
      total: _vm.totalNotes,
      "page-size": _vm.pageSize
    },
    model: {
      value: _vm.currentpage,
      callback: function callback($$v) {
        _vm.currentpage = $$v;
      },
      expression: "currentpage"
    }
  })], 1)]], 2)] : [_c("div", {
    staticClass: "flex justify-center no-data-found py-10"
  }, [_c("div", {
    staticClass: "flex flex-col"
  }, [_c("h6", {
    staticClass: "font-bold mb-3"
  }, [_vm._v("No Notes Created")]), _vm._v(" "), _c("AddBtn", {
    attrs: {
      text: "New Note"
    },
    on: {
      onClick: function onClick($event) {
        return _vm.toggleShowBox(true);
      }
    }
  })], 1)])], _vm._v(" "), _c("AddNotes", {
    attrs: {
      isShow: _vm.isAddBoxShowing,
      noteDetails: _vm.selectedNoteDetails
    },
    on: {
      getDealNotes: _vm.getDealNotes,
      toggleShowBox: function toggleShowBox($event) {
        return _vm.toggleShowBox(false);
      }
    }
  })], 2);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=template&id=79fb181c&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=template&id=79fb181c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
      width: "45rem"
    },
    attrs: {
      visible: _vm.isShow,
      breakpoints: {
        "960px": "75vw",
        "640px": "100vw"
      },
      position: "bottomright",
      header: "Header"
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", {
          staticClass: "flex items-center w-full"
        }, [_c("vs-icon", {
          staticClass: "mr-2 down-angle",
          attrs: {
            size: "25px",
            icon: "chevron_right"
          }
        }), _vm._v(" "), _c("h5", {
          staticClass: "font-bold pt-2"
        }, [_vm._v(_vm._s(!_vm.isEdit ? "New" : "Edit") + " Note")]), _vm._v(" "), _c("vs-icon", {
          staticClass: "cursor-pointer ml-auto",
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
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "content"
  }, [_c("vue-editor", {
    attrs: {
      editorToolbar: _vm.customToolbar
    },
    model: {
      value: _vm.content,
      callback: function callback($$v) {
        _vm.content = $$v;
      },
      expression: "content"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex items-center my-3"
  }, [_c("vs-button", {
    staticClass: "mx-3 action-btn",
    attrs: {
      color: "primary",
      type: "border",
      size: "small"
    },
    on: {
      click: _vm.onClose
    }
  }, [_vm._v("\n        Cancel\n      ")]), _vm._v(" "), _c("vs-button", {
    staticClass: "action-btn",
    attrs: {
      color: "primary",
      size: "small",
      disabled: _vm.isSubmitDisabled
    },
    on: {
      click: _vm.saveOrUpdateDealNotes
    }
  }, [_vm._v("\n        Save\n      ")])], 1)], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-note-btn {\n  font-size: 1rem !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=ltr] .notes .down-angle[data-v-3e22a52d], [dir=ltr] .notes .vs-collapse-item.open-item .icon-scale[data-v-3e22a52d] {\n  transform: rotate(90deg);\n}[dir=rtl] .notes .down-angle[data-v-3e22a52d], [dir=rtl] .notes .vs-collapse-item.open-item .icon-scale[data-v-3e22a52d] {\n  transform: rotate(-90deg);\n}\n.notes .vs-collapse-item .icon-scale[data-v-3e22a52d] {\n  transition: 0.5s ease;\n}\n[dir] .notes .accordions .accordion-item[data-v-3e22a52d] {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir] .notes .accordions .accordion-item .accordion-toggle[data-v-3e22a52d] {\n  cursor: pointer;\n}\n.notes .accordions .accordion-item .note-description[data-v-3e22a52d] {\n  overflow: hidden;\n}\n[dir=ltr] .notes .rotate-90-degree[data-v-3e22a52d] {\n  transform: rotate(90deg);\n}\n[dir=rtl] .notes .rotate-90-degree[data-v-3e22a52d] {\n  transform: rotate(-90deg);\n}\n.notes .note-collapse[data-v-3e22a52d] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.notes .note-item-content[data-v-3e22a52d] {\n  min-width: 80%;\n}\n.notes .note-item-content h6[data-v-3e22a52d] {\n  color: rgba(var(--vs-primary), 1);\n  font-size: 16px;\n  font-weight: 500;\n}\n.notes .note-item-content small[data-v-3e22a52d] {\n  color: var(--Black-Black-400, #45454A);\n  font-size: 12px;\n  font-weight: 400;\n}\n.notes .note-item-content .note-description small p[data-v-3e22a52d] {\n  color: var(--Black-Black-400, #45454A);\n  font-size: 14px;\n  font-weight: 400;\n}\n[dir] .notes .note-item-content .note-description small p[data-v-3e22a52d] {\n  padding-top: 10px;\n}\n.notes .vs-button-primary.vs-button-border[data-v-3e22a52d] {\n  color: #FFFFFF !important;\n}\n[dir] .notes .vs-button-primary.vs-button-border[data-v-3e22a52d] {\n  background-color: rgba(var(--vs-primary), 1) !important;\n  border: 1px solid rgba(var(--vs-primary), 1) !important;\n}\n.notes .vs-button-primary.vs-button-border[data-v-3e22a52d]:hover {\n  color: #FFFFFF !important;\n}\n[dir] .notes .vs-button-primary.vs-button-border[data-v-3e22a52d]:hover {\n  background-color: rgba(var(--vs-primary), 1) !important;\n  border: 1px solid rgba(var(--vs-primary), 1) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content .con-vs-checkbox .vs-checkbox {\n  height: 15px;\n  width: 15px;\n}\n.content .con-vs-checkbox .con-slot-label {\n  display: inline-flex;\n  align-items: center;\n}\n[dir=ltr] .content .down-angle {\n  margin-left: 0.25rem;\n}\n[dir=rtl] .content .down-angle {\n  margin-right: 0.25rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../../../node_modules/css-loader!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBtn.vue?vue&type=template&id=0b13993f& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&");
/* harmony import */ var _AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBtn.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=style&index=0&id=0b13993f&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_style_index_0_id_0b13993f_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBtn.vue?vue&type=template&id=0b13993f& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/AddBtn.vue?vue&type=template&id=0b13993f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBtn_vue_vue_type_template_id_0b13993f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notes_vue_vue_type_template_id_3e22a52d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notes.vue?vue&type=template&id=3e22a52d&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=template&id=3e22a52d&scoped=true&");
/* harmony import */ var _Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notes.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Notes_vue_vue_type_style_index_0_id_3e22a52d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notes_vue_vue_type_template_id_3e22a52d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notes_vue_vue_type_template_id_3e22a52d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e22a52d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3e22a52d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/style-loader!../../../../../../../../../node_modules/css-loader!../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=style&index=0&id=3e22a52d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3e22a52d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3e22a52d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3e22a52d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3e22a52d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=template&id=3e22a52d&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=template&id=3e22a52d&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_template_id_3e22a52d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=template&id=3e22a52d&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/Notes.vue?vue&type=template&id=3e22a52d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_template_id_3e22a52d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_template_id_3e22a52d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddNotes_vue_vue_type_template_id_79fb181c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNotes.vue?vue&type=template&id=79fb181c& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=template&id=79fb181c&");
/* harmony import */ var _AddNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNotes.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddNotes_vue_vue_type_style_index_0_id_79fb181c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss& */ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNotes_vue_vue_type_template_id_79fb181c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddNotes_vue_vue_type_template_id_79fb181c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNotes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_style_index_0_id_79fb181c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/style-loader!../../../../../../../../../../node_modules/css-loader!../../../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=style&index=0&id=79fb181c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_style_index_0_id_79fb181c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_style_index_0_id_79fb181c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_style_index_0_id_79fb181c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_style_index_0_id_79fb181c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=template&id=79fb181c&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=template&id=79fb181c& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_template_id_79fb181c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNotes.vue?vue&type=template&id=79fb181c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/marketing/crm/deal-information/components/notes/AddNotes.vue?vue&type=template&id=79fb181c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_template_id_79fb181c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNotes_vue_vue_type_template_id_79fb181c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=82.js.map