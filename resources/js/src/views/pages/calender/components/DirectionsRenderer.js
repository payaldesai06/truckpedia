import {MapElementFactory} from 'vue2-google-maps';

export default MapElementFactory({
  name: 'directionsRenderer',
  ctr() {
    return window.google.maps.DirectionsRenderer;
  },
  events: [],
  mappedProps: {},
  props: {
    origin: {type: [Object, Array]},
    waypoints: {type: Array},
    destination: {type: [Object, Array]},
    travelMode: {type: String},
    optimizeWaypoints: {type: Boolean}
  },

  data() {
    return {
      directionsService: null,
      directionsRenderer: null,
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
  afterCreate(directionsRenderer) {
    // console.log('afterCreate(): ' + JSON.stringify(this.origin));
    this.directionsService = new window.google.maps.DirectionsService();
    this.directionsRenderer = directionsRenderer;
    this.refreshMap();
    this.$watch(
        () =>
            [this.origin, this.waypoints, this.destination, this.travelMode,
             this.optimizeWaypoints],
        () => {
          this.refreshMap();
        });
  },

  methods: {
    refreshMap() {
      let {origin, waypoints, destination, travelMode, optimizeWaypoints} =
          this;
      if (!this.origin || !this.destination || !this.travelMode ||
          !this.waypoints) {
        return;
      }
      this.directionsService.route(
          {origin, destination, waypoints, travelMode, optimizeWaypoints},
          (response, status) => {
            if (status !== 'OK') return;
            this.directionsRenderer.setDirections(response);
          });
    }
  },
});