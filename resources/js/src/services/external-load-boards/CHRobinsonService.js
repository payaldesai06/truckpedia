
import axios from '../../http/axios'

export default {
  async connectionStatus() {
    return await axios.get(`/chrobinson/connection-status`);
  },

  async getCarrierCode() {
    return await axios.get(`/chrobinson/carrier-code`);
  },

  async postCarrierCode(payload) {
    return await axios.post(`/chrobinson/carrier-code`, payload);
  },

  async deleteCarrierCode(payload) {
    return await axios.delete(`/chrobinson/carrier-code`, payload);
  },

  async searchLoads(payload) {
    return await axios.post(`/chrobinson/search-loads`, payload);
  },
}
