(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[237],{

/***/ "./resources/js/src/mixins/globalMixins.js":
/*!*************************************************!*\
  !*** ./resources/js/src/mixins/globalMixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    showErrorMessage: function showErrorMessage(message) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8000;
      this.$vs.notify({
        time: time,
        color: 'danger',
        title: 'Error',
        text: message
      });
    },
    showSuccessMessage: function showSuccessMessage(message) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
      this.$vs.notify({
        time: time,
        color: 'primary',
        title: 'Success',
        text: message
      });
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=237.js.map