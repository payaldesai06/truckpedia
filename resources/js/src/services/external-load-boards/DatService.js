import axios from '../../http/axios'

export default {
  async accountDetails() {
    return await axios.get('/dat/account-details')
  },
  async postServiceAccount(payload) {
    return await axios.post('/dat/service-account', payload);
  },
  async deleteServiceAccount() {
    return await axios.delete('/dat/service-account');
  },
  async postUserAccount(payload) {
    return await axios.post('/dat/user-account', payload);
  },
  async deleteUserAccount() {
    return await axios.delete('/dat/user-account');
  },
  async connectionStatus() {
    return await axios.get('/dat/connection-status');
  },
  async searchLoads(payload) {
    return await axios.post('/dat/search-loads', payload);
  },
}