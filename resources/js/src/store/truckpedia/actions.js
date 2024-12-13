import {
  searchByLoad,
  reserveByLoad,
  trackCarrierTrucks,
} from "@/services/TruckpediaService";

export default {
  async searchByLoad(_, { loadId }) {
    const { data } = await searchByLoad({ loadId });
    return data;
  },
  async reserveByLoad(_, { loadId, estimatedPrice, carrierCompanyId }) {
    const { data } = await reserveByLoad({
      loadId,
      estimatedPrice,
      carrierCompanyId,
    });
    return data;
  },
  async trackCarrierTrucks(_, payload) {
    const { data } = await trackCarrierTrucks(payload);
    return data;
  }
};
