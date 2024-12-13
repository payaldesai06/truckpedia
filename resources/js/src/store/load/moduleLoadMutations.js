export default {
  SET_LOADS(state, data) {
    state.loads = data;
  },

  SET_LOAD(state, data) {
    state.load = data;
  },

  CREATE_LOAD(state, data) {
    state.loads.data.push(data);
  },

  UNSET_LOAD(state) {
    state.load = null;
  },

  /*
   * Admin Upload Load Documents
   */
  ADMIN_UPLOAD_LOAD_IMAGE(state, loadImage) {
    state.load.load_images.push(loadImage);
  },

  ADMIN_DELETE_LOAD_IMAGE(state, loadImageId) {
    state.load.load_images = state.load.load_images.filter((loadImage) => {
      return loadImage.load_image_id != loadImageId;
    });
  },

  ADMIN_UPLOAD_RATE_CONFIRMATION(state, rateConfirmation) {
    state.load.load_rate_confirmations.unshift(rateConfirmation);
  },

  ADMIN_DELETE_RATE_CONFIRMATION(state, rateConfirmationId) {
    state.load.load_rate_confirmations =
      state.load.load_rate_confirmations.filter((rateConfirmation) => {
        return rateConfirmation.load_rate_confirmation_id != rateConfirmationId;
      });
  },

  ADMIN_UPLOAD_THIRD_PARTY_CARRIER_INVOICE(state, file) {
    state.load.thirdPartyCarrier = {
      ...state.load.thirdPartyCarrier,
      ...file,
    };
  },

  ADMIN_DELETE_THIRD_PARTY_CARRIER_INVOICE(state) {
    state.load.thirdPartyCarrier = {
      ...state.load.thirdPartyCarrier,
      invoiceOriginalFileName: null,
      invoiceStorageFileName: null,
      invoiceUrl: null,
    };
  },

  ADMIN_UPLOAD_INVOICE(state, invoice) {
    state.load.invoice_file_name = invoice.invoice_file_name;
    state.load.invoice_file_url = invoice.invoice_file_url;
    state.load.originalFileName = invoice.originalFileName;
  },

  /*
   * Loading
   */

  LOAD_START_LOADING(state) {
    state.loading = true;
  },

  LOAD_STOP_LOADING(state) {
    state.loading = false;
  },

  SET_ALL_DRIVER_TRUCK_TRAILER_FOR_LOAD_DRIVER(state, data) {
    // Test case 1: Verify that the state is updated correctly
    // Test case 2: Verify that the allDriverTruckTrailerForLoadDriverLoaded is set to true
    // Test case 3: Verify that the state is not updated when data is not provided
    // Test case 4: Verify that the allDriverTruckTrailerForLoadDriverLoaded is not changed when data is not provided

    state.allDriverTruckTrailerForLoadDriver = data;
    state.allDriverTruckTrailerForLoadDriverLoaded = true;
  },

  RESET_LOAD_STATE(state) {
    state.load = null;
  },

  updateCollaboratorEmails(state, data) {
    if (state.load) state.load.collaboratorEmails = data;
  },

  updateShowRateConToDriver(state, data) {
    if (state.load) state.load.showRateConToDriver = data;
  },

  SET_PUBLIC_WEEKLY_FUEL_PRICES(state, data) {
    state.publicWeeklyFuelPrices = data;
  },

  SET_LOAD_DISTANCE_CACHE(state, data) {
    state.loadDistancesCacheMap.set(data.key, data.value);
  }
}
