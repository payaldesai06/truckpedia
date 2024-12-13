
import axios from '../../http/axios'

export default {
  async connectionStatus() {
    return await axios.get(`/truckstop/connection-status`);
  },
  async getIntegrationId() {
    return await axios.get(`/truckstop/integration-id`);
  },
  async postIntegrationId(payload) {
    return await axios.post(`/truckstop/integration-id`, payload);
  },
  async deleteIntegrationId(payload) {
    return await axios.delete(`/truckstop/integration-id`, payload);
  },
  async searchLoads(payload) {
    return await axios.post(`/truckstop/search-loads`, payload);
  },
}
