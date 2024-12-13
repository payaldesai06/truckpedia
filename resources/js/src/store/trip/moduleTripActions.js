import tripService from "@/services/TripService";

export default {
  getTrip({ commit }, tripId) {
    return tripService.getTrip(tripId).then(({ data }) => {
      return data;
    });
  },

  tripPayment({ commit }, payload) {
    return tripService.tripPayment(payload).then(({ data }) => {
      return data;
    });
  },
};
