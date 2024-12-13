import axios from "../http/axios";

export default {
  async getOverview(payload) {
    return await axios.post("v2/homeTab/getOverview", payload);
  },
  async getCustomerOverview(payload) {
    return await axios.post("v2/homeTab/customerOverview", payload);
  },
  async getDriverOverview(payload) {
    return await axios.post("v2/homeTab/driverOverview", payload);
  },
  async getTruckOverview(payload) {
    return await axios.post("v2/homeTab/truckOverview", payload);
  },
  async getMarketOverview(payload) {
    return await axios.post("v2/homeTab/marketOverview", payload);
  },
  async getDispatcherOverview(payload) {
    return await axios.post("v2/homeTab/dispatcherOverview", payload);
  }
};
