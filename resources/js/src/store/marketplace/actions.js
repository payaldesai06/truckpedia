import {
  getMarketplaceLanes,
  deleteMarketplaceLanes,
  createMarketplaceLane,
  updateMarketplaceLane,
} from '@/services/marketplaceService';

export default {
  async getMarketplaceLanes(_, payload) {
    const response = await getMarketplaceLanes(payload);
    return response;
  },
  async deleteMarketplaceLanes(_, id) {
    const response = await deleteMarketplaceLanes(id);
    return response;
  },
  async createMarketplaceLane(_, payload) {
    const result = await createMarketplaceLane(payload);
    return result;
  },
  async updateMarketplaceLane(_, { id, payload }) {
    const response = await updateMarketplaceLane({ id, payload });
    return response;
  },
};
