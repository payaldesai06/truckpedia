import axios from "../http/axios";

export default {
  async getConnectionStatus() {
    return await axios.get("/v2/fuelCard/wex/connection-status");
  },
  async getAccountDetails() {
    return await axios.get("/v2/fuelCard/wex/account");
  },
  async postWexServiceAccount(payload) {
    return await axios.post("/v2/fuelCard/wex/account", payload);
  },
  async disconnectWexAccount() {
    return await axios.delete("/v2/fuelCard/wex/disconnect");
  },
};
