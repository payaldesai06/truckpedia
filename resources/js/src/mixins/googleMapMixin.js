export default {
  data () {
    return {
      GMAPS: null
    }
  },

  async created () {
    try {
      const {maps} = await this.$gmapApiPromiseLazy()
      this.GMAPS = maps
    } catch (error) {
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: error.response.data.message
      })
    }
  },

  methods: {
    async getGoogleMapDistanceBetween (directionRequest, callback) {
      if (!this.GMAPS) return callback(null, 'ERROR')

      await new this.GMAPS.DirectionsService()
        .route({travelMode: 'DRIVING', ...directionRequest}, async function (response, status) {
          await callback(response, status)
        })
    },

    async getGoogleDistanceBetweenMultipleRoutes (routes = []) {
      let distance = 0

      for (const routeKey in routes) {
        await this.getGoogleMapDistanceBetween(routes[routeKey], async (response) => {
          const directionsData = response.routes[0].legs[0]
          if (!directionsData) return 0

          distance += +directionsData.distance.value
        })
      }

      return distance
    },

    async getGeocoderLatLng (address) {
      if (!this.GMAPS) {
        const {maps} = await this.$gmapApiPromiseLazy();
        this.GMAPS = maps
      }
      const Geocoder = new this.GMAPS.Geocoder()
        if (typeof address === 'object') return await Geocoder.geocode(address);
        else return await Geocoder.geocode({ address });
    },

    getPlaceDetails (placeId, map) {
      const placesService = new this.GMAPS.places.PlacesService(map.$mapObject);

      return new Promise((resolve, reject) => {
        placesService.getDetails({ placeId }, (place, status) => {
          if (status === "OK") resolve(place);
          else reject(status);
        });
      });
    },

    async getCoordinatesFromAddress(address) {
      const { results } = await this.getGeocoderLatLng(address);
      const {
        geometry: { location },
      } = results[0];

      return { lat: location.lat(), lng: location.lng() };
    }
      
  }
}
