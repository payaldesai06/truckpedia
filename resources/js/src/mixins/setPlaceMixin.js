export default {
  methods: {
    setPlace(place, returnNullInsteadOfEmptyString = false) {
      // Initialize variables to store address components

      let address = returnNullInsteadOfEmptyString ? null : '';
      let city = returnNullInsteadOfEmptyString ? null : '';
      let state = returnNullInsteadOfEmptyString ? null : '';
      let zipCode = returnNullInsteadOfEmptyString ? null : '';

      if (!this.verifyPlaceInput(place)) {
        return {
          address,
          city,
          state,
          zipCode,
          postalCode: zipCode,
          latitude: null,
          longitude: null,
        };
      }

      // Extract the address from the formatted_address property
      address = place.formatted_address.split(', ').slice(0, -3).join(', ');

      // If the address is empty, use the first component from formatted_address
      if (!address) {
        address = place.formatted_address.split(', ')[0];
      }

      // Extract address components from the address_components array
      const addressComponents = place.address_components || [];
      addressComponents.forEach((addressComponent) => {
        const types = addressComponent.types || [];
        if (types.includes('locality')) {
          city = addressComponent.long_name;
        } else if (!city && types.includes('neighborhood')) {
          city = addressComponent.long_name;
        }
        if (types.includes('administrative_area_level_1')) {
          state = addressComponent.short_name;
        }
        if (types.includes('postal_code')) {
          zipCode = addressComponent.short_name;
        }
      });

      // Extract latitude and longitude from the geometry
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();

      // Return the extracted address components as an object
      return {
        address,
        city,
        state,
        zipCode,
        postalCode: zipCode,
        latitude,
        longitude,
      };
    },
    /**
     * Verifies if the given place object has a valid formatted address and geometry.
     *
     * @param {Object} place - The place object to be verified.
     * @return {boolean} Returns true if the place object has a valid formatted address and geometry, otherwise false.
     */
    verifyPlaceInput(place) {
      return place && place.formatted_address && place.geometry;
    },
  },
};
