import axios from '../http/axios'
import axiosNode from '../http/axiosNode';

export default {

  async getConnectionStatus() {
    return await axios.get('/samsara/connection-status');
  },

  async connectToSamsara () {
    return await axios.get('/samsara/connect');
  },

  async disconnectToSamsara() {
    return await axios.delete('/samsara/disconnect');
  },

  async processSamsaraResponse (query) {
    return await axios.get('/samsara/auth_callback', query);
  },

  async getDriversFuelEnergyReports(query) {
    return await axiosNode.get('/samsara/fuelEnergyReports/drivers', {
      params: query,
    });
  },

  async getTrucksFuelEnergyReports(query) {
    return await axiosNode.get('/samsara/fuelEnergyReports/trucks', {
      params: query,
    });
  }
}
