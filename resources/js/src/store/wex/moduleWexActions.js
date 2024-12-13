import wexService from "@/services/WexService";

export default {
  async getConnectionStatus({ commit }) {
    const result = await wexService.getConnectionStatus();
    commit("SET_WEX_CONNECTION_STATUS", result.data);
    return result.data;
  },

  async getAccountDetails({ commit }) {
    const result = await wexService.getAccountDetails();
    return result.data;
  },

  async postWexServiceAccount({ commit }, payload) {
    const result = await wexService.postWexServiceAccount(payload);
    return result.data;
  },

  async disconnectWexAccount({ commit }) {
    return wexService.disconnectWexAccount().then(({ data }) => {
      return data;
    });
  },
};
