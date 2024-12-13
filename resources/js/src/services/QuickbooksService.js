import axios from '../http/axios'

export default {
  async getConnectionStatusAll() {
    return await axios.get(`/quickbooks/connection-status-all`);
  },

  async getConnectionStatus(tagId = '') {
    return await axios.get(`/quickbooks/connection-status/${tagId}`);
  },

  async connectToQuickbooks(payload) {
    return await axios.post('/quickbooks/connect', payload);
  },

  async disconnectToQuickbooks(tagId = '') {
    return await axios.delete(`/quickbooks/disconnect/${tagId}`);
  },

  async processQuickbooksResponse(query) {
    return await axios.get('/quickbooks/auth_callback', query);
  },

  async syncToQuickbooks({id}) {
    return await axios.post(`/loads/${id}/sync-to-quickbooks`);
  },
}
