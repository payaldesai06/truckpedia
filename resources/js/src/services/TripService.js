import axios from "../http/axios";

export default {
  async getTrip(tripId) {
    return await axios.get(`/trips/${tripId}`);
  },

  async tripPayment(tripPayment) {
    return await axios.patch(
      `/trips/${tripPayment.id}/payment`,
      tripPayment.payload
    );
  },
};
