import axios from '../http/axios'

export default {
    async connectionStatus() {
      return await axios.get(`/authorize-net/connectionStatus`);
    },
    async connectPayment(payload) {
      return await axios.post(`/authorize-net/connect`, payload);
    },
    async getAuthorizeKey() {
      return await axios.get(`/authorize-net/getKey`);
    },
}