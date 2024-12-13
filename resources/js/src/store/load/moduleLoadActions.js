import loadService from '@/services/LoadService';
import qbdService from '@/services/QbdService';
import quickbooksService from '@/services/QuickbooksService';
import constants from '../../config/constants';
export default {
  getLoadDatatable({ commit }, { eventForServer, filter }) {
    return loadService
      .getLoadDatatable(eventForServer, filter)
      .then(({ data }) => {
        if (!filter.hasOwnProperty('toDownload')) {
          commit('SET_LOADS', data.payload);
        }
        return data;
      });
  },

  // Get Unique ID for LOAD
  getLoadUniqueId({ commit }, tagId = '') {
    return loadService.getLoadUniqueId(tagId).then(({ data }) => {
      // commit('SET_LOADS', data)
      return data;
    });
  },

  getLoad({ commit, state }, loadId) {
    if (state.load) return state.load;

    return loadService.getLoad(loadId).then(({ data }) => {
      commit('SET_LOAD', data.payload);
      return data;
    });
  },

  getOneLoad({ commit, state }, { loadId, params }) {
    return loadService.getOneLoad({ loadId, params }).then(({ data }) => {
      return data;
    });
  },

  createLoad({ commit }, payload) {
    return loadService.createLoad(payload).then(({ data }) => {
      // commit('CREATE_LOAD', data)
      return data;
    });
  },

  updateLoad({ commit }, payload) {
    return loadService.updateLoad(payload).then(({ data }) => {
      // commit('UPDATE_LOAD', data)
      return data;
    });
  },

  updateLoadDispatcherNotes({ commit }, payload) {
    return loadService.updateLoadDispatcherNotes(payload).then(({ data }) => {
      return data;
    });
  },

  deleteLoad({ commit }, payload) {
    return loadService.deleteLoad(payload).then(({ data }) => data);
  },

  restoreLoad({ commit }, payload) {
    return loadService.restoreLoad(payload).then(({ data }) => data);
  },

  updateSelectFields({ commit }, payload) {
    return loadService.updateSelectFields(payload).then(({ data }) => {
      if (payload.hasOwnProperty('showRateConToDriver')) {
        commit('updateShowRateConToDriver', payload.showRateConToDriver);
      }
      return data;
    });
  },

  getAgingReport({ commit }, payload) {
    return loadService.getAgingReport(payload).then(({ data }) => data);
  },
  /*
   * Rate Confirmation S3 File path
   */
  getRateConfirmationS3({ commit }, payload) {
    return loadService.getRateConfirmationS3(payload).then((data) => data.data);
  },

  /**
   * PDF Parser: Rate Confirmation PDF Extract Data
   */
  getRateConfirmationPdfExtractData({ commit }, payload) {
    return loadService.getPdfExtractData(payload).then((data) => data.data);
  },

  /*
   * Load Invoice
   */
  generateInvoice({ commit }, payload) {
    return loadService.generateInvoice(payload).then((data) => {
      return data;
    });
  },

  generateMassInvoice({ commit }, payload) {
    return loadService.generateMassInvoice(payload).then(({ data }) => data);
  },
  /*
   * Sync Invoice to QuickBooks Online
   */
  syncToQuickbooks({ commit }, payload) {
    return quickbooksService.syncToQuickbooks(payload).then((data) => {
      // console.log(data);
      return data;
    });
  },

  /*
   * Sync Invoice to QuickBooks Desktop
   */
  syncToQbd({ commit }, payload) {
    return qbdService.syncToQuickbooks(payload).then((data) => {
      // console.log(data);
      return data;
    });
  },

  /*
   * Sync Invoice to QuickBooks Desktop
   */
  syncMassInvoiceToQbd({ commit }, payload) {
    return qbdService.syncMassInvoiceToQuickbooks(payload).then((data) => {
      return data;
    });
  },

  /*
   * Request for Payment
   */
  requestForPayment({ commit }, payload) {
    return loadService.requestForPayment(payload).then((data) => {
      return data;
    });
  },

  requestMassInvoicePayment({ commit }, payload) {
    return loadService
      .requestMassInvoicePayment(payload)
      .then(({ data }) => data);
  },

  /*
   * Request for Payment
   */
  paymentReceived({ commit }, payload) {
    return loadService.paymentReceived(payload).then((data) => {
      return data;
    });
  },

  multipleLoadsPaymentReceived({ commit }, payload) {
    return loadService
      .multipleLoadsPaymentReceived(payload)
      .then(({ data }) => data);
  },

  batchDeleteLoads({ commit }, payload) {
    return loadService.batchDeleteLoads(payload).then(({ data }) => data);
  },

  /*
   * Admin Upload Load Documents
   */
  adminUploadLoadImage({ commit }, payload) {
    return loadService.adminUploadLoadImage(payload).then(({ data }) => {
      commit('ADMIN_UPLOAD_LOAD_IMAGE', data.payload);
      return data;
    });
  },

  adminDeleteLoadImage({ commit }, payload) {
    return loadService.adminDeleteLoadImage(payload).then((data) => {
      commit('ADMIN_DELETE_LOAD_IMAGE', payload.loadImageId);
      return data;
    });
  },

  adminUploadRateConfirmation({ commit }, payload) {
    return loadService.adminUploadRateConfirmation(payload).then(({ data }) => {
      commit('ADMIN_UPLOAD_RATE_CONFIRMATION', data.payload);
      return data;
    });
  },

  adminDeleteRateConfirmation({ commit }, payload) {
    return loadService.adminDeleteRateConfirmation(payload).then((data) => {
      commit('ADMIN_DELETE_RATE_CONFIRMATION', payload.rateConfirmationId);
      return data;
    });
  },

  adminUploadThirdPartyCarrierInvoice({ commit }, payload) {
    return loadService
      .adminUploadThirdPartyCarrierInvoice(payload)
      .then(({ data }) => {
        commit('ADMIN_UPLOAD_THIRD_PARTY_CARRIER_INVOICE', data.payload);
        return data;
      });
  },

  adminDeleteThirdPartyCarrierInvoice({ commit }, payload) {
    return loadService
      .adminDeleteThirdPartyCarrierInvoice(payload)
      .then((data) => {
        commit('ADMIN_DELETE_THIRD_PARTY_CARRIER_INVOICE');
        return data;
      });
  },

  adminUploadInvoice({ commit }, payload) {
    return loadService.adminUploadInvoice(payload).then(({ data }) => {
      commit('ADMIN_UPLOAD_INVOICE', data.payload);
      return data;
    });
  },

  /**
   * Mark Trailer Picked Up
   */
  trailerPickedUp(_, payload) {
    return loadService.trailerPickedUp(payload).then(({ data }) => data);
  },

  /*
   * RESET DATA
   */
  resetLoad({ commit }) {
    commit('UNSET_LOAD');
  },

  /*
   * Loading
   */
  startLoading({ commit }) {
    commit('LOAD_START_LOADING');
  },

  stopLoading({ commit }) {
    commit('LOAD_STOP_LOADING');
  },

  getAllDriverWithAssignedVehicles() {
    return loadService.getAllDriverWithAssignedVehicles().then(({ data }) => {
      return data;
    });
  },

  cancelLoad({ commit }, payload) {
    return loadService.cancelLoad(payload).then((data) => {
      return data;
    });
  },
  restoreCanceledLoad({ commit }, payload) {
    return loadService.restoreCanceledLoad(payload).then((data) => {
      return data;
    });
  },

  getAllDriverTruckTrailerForLoadDriver({ commit }) {
    return loadService
      .getAllDriverTruckTrailerForLoadDriver()
      .then((response) => {
        const { payload } = response.data;
        commit('SET_ALL_DRIVER_TRUCK_TRAILER_FOR_LOAD_DRIVER', payload);
        return payload;
      });
  },

  extractLoadTenderDataFromTxt({ commit }, payload) {
    return loadService
      .extractLoadTenderDataFromTxt(payload)
      .then(({ data }) => data);
  },
  customizedMergeLoad({ commit }, payload) {
    return loadService.customizedMergeLoad(payload).then(({ data }) => data);
  },

  getUploadUrlPath({ commit }, payload) {
    return loadService.getUploadUrlPath(payload).then(({ data }) => data);
  },
  clearStateAction({ commit }) {
    commit('RESET_LOAD_STATE');
  },
  trackLoadTrucks(_, payload) {
    return loadService.trackLoadTrucks(payload).then(({ data }) => data);
  },
  async loadsBulkUpdate(_, payload) {
    const response = await loadService.loadsBulkUpdate(payload);
    return response.data.payload;
  },
  getPublicWeeklyFuelPrices({ commit, state }) {
    // If data exists and cache is not expired, return existing data
    if (
      Object.keys(state.publicWeeklyFuelPrices).length > 0 &&
      !isCacheExpired(state.publicWeeklyFuelPrices)
    ) {
      return Promise.resolve(state.publicWeeklyFuelPrices);
    }

    return loadService.getPublicWeeklyFuelPrices().then(({ data }) => {
      const updatedData = {
        ...data.payload,
        cacheTimestamp: Date.now() + constants.publicFuelPricesCacheTimestamp, // Cache for 4 hours from now
      };
      commit('SET_PUBLIC_WEEKLY_FUEL_PRICES', updatedData);

      return updatedData;
    });
  },
  async nodeGetLoads(_, params) {
    return await loadService.nodeGetLoads(params);
  },
  async nodeUpdateLoad(_, {id, payload}) {
    return await loadService.nodeUpdateLoad(id, payload);
  },
  setLoadDistanceCacheToStore({ commit }, payload) {
    if (payload) {
      commit('SET_LOAD_DISTANCE_CACHE', payload);
    }
  },
};

function isCacheExpired(data) {
  const currentTimestamp = Date.now();
  return currentTimestamp > data.cacheTimestamp;
}
