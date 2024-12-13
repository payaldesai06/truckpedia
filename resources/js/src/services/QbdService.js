import axios from '../http/axios'

export default {
  async getConnectionStatusAll() {
    return await axios.get(`/qbd/connection-status-all`);
  },

  async getConnectionStatus(tagId = '') {
    return await axios.get(`/qbd/connection-status/${tagId}`);
  },

  async connectToQuickbooks(payload) {
    return await axios.post('/qbd/connect', payload);
  },

  async disconnectToQuickbooks(tagId = '') {
    return await axios.delete(`/qbd/disconnect/${tagId}`);
  },

  async syncToQuickbooks({id}) {
    return await axios.post(`/loads/${id}/sync-to-qbd`);
  },

  async syncMassInvoiceToQuickbooks(payload) {
    return await axios.post(`/loads/sync-mass-invoice-to-qbd`, payload);
  },
}
