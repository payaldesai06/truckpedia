(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[238],{

/***/ "./resources/js/src/views/pages/calender/components/DirectionsRenderer.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/pages/calender/components/DirectionsRenderer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(vue2_google_maps__WEBPACK_IMPORTED_MODULE_0__["MapElementFactory"])({
  name: 'directionsRenderer',
  ctr: function ctr() {
    return window.google.maps.DirectionsRenderer;
  },
  events: [],
  mappedProps: {},
  props: {
    origin: {
      type: [Object, Array]
    },
    waypoints: {
      type: Array
    },
    destination: {
      type: [Object, Array]
    },
    travelMode: {
      type: String
    },
    optimizeWaypoints: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      directionsService: null,
      directionsRenderer: null
    };
  },
  // When the shared link page is opened on a new browser (or incognito mode)
  // for the first time, watch() notices orgin change, then afterCreate() is
  // called with origin != null. Therefore, if we only use this.$watch() in
  // afterCreate(), the code will not render the map correctly because origin
  // will never change! However, when we refresh the page, afterCreate() is
  // called with origin == null before watch(), that is why the old code works
  // only after we refresh the page.
  // On the other hand, when there is truck and we get its location from Samsara
  // or KeepTruckin, the map is loaded correctly because truck data comes after
  // afterCreate() is called.
  afterCreate: function afterCreate(directionsRenderer) {
    var _this = this;

    // console.log('afterCreate(): ' + JSON.stringify(this.origin));
    this.directionsService = new window.google.maps.DirectionsService();
    this.directionsRenderer = directionsRenderer;
    this.refreshMap();
    this.$watch(function () {
      return [_this.origin, _this.waypoints, _this.destination, _this.travelMode, _this.optimizeWaypoints];
    }, function () {
      _this.refreshMap();
    });
  },
  methods: {
    refreshMap: function refreshMap() {
      var _this2 = this;

      var origin = this.origin,
          waypoints = this.waypoints,
          destination = this.destination,
          travelMode = this.travelMode,
          optimizeWaypoints = this.optimizeWaypoints;

      if (!this.origin || !this.destination || !this.travelMode || !this.waypoints) {
        return;
      }

      this.directionsService.route({
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: travelMode,
        optimizeWaypoints: optimizeWaypoints
      }, function (response, status) {
        if (status !== 'OK') return;

        _this2.directionsRenderer.setDirections(response);
      });
    }
  }
}));

/***/ })

}]);
//# sourceMappingURL=238.js.map