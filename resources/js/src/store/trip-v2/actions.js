import {
  fetchTrips,
  deleteTrip,
  fetchTripById,
  approveTrip,
  customPaymentFieldCreate,
  customPaymentGetField,
  getUploadUrl,
  uploadFiles,
  deleteFile,
  getLoadsForPlanning,
  createTrip,
  getDriverPay,
  updatePreTripDriverPay,
  changeStatus,
} from '../../services/TripService-v2';

export default {
  async fetchTrips(_, { page, pageSize, filters = {}, sortBy = {} }) {
    const result = await fetchTrips(page, pageSize, filters, sortBy);
    return result;
  },
  async deleteTrip(_, { tripId }) {
    const result = await deleteTrip(tripId);
    return result;
  },
  async fetchTripById(_, id) {
    const result = await fetchTripById(id);
    return result;
  },
  async approveTrip(_, payload) {
    const result = await approveTrip(payload);
    return result;
  },
  async customPaymentFieldCreate({ commit }, payload) {
    const result = await customPaymentFieldCreate(payload);
    return result;
  },
  async customPaymentGetField() {
    const result = await customPaymentGetField();
    return result;
  },
  async getUploadUrl(_, payload) {
    const result = await getUploadUrl(payload);
    return result;
  },
  async uploadFiles(_, payload) {
    const result = await uploadFiles(payload);
    return result;
  },
  async deleteFile(_, payload) {
    const result = await deleteFile(payload);
    return result;
  },
  async getLoadsForPlanning({ commit }, payload) {
    const { data } = await getLoadsForPlanning(payload);
    const {
      payload: { loads },
    } = data || {};
    commit('setLoadsForPlanning', structuredClone(loads));
    return data;
  },
  async createTrip(_, payload) {
    const { data } = await createTrip(payload);
    return data;
  },
  async getDriverPay(_, payload) {
    const { data } = await getDriverPay(payload);
    return data;
  },
  async updatePreTripDriverPay(_, payload) {
    const { data } = await updatePreTripDriverPay(payload);
    return data;
  },
  async changeStatus(_, payload) {
    const result = await changeStatus(payload);
    return result;
  },
};
