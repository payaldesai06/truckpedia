import quickbooksService from '@/services/QuickbooksService'

export default {
  async getConnectionStatusAll({commit}) {
    return await quickbooksService.getConnectionStatusAll().then((response) => {
      commit('SET_QBO_CONNECTION_STATUS', response.data.payload);
      return response.data.payload;
    })
  },

  async getConnectionStatus({commit}, tagId = '') {
    var msg = '';
    await quickbooksService.getConnectionStatus(tagId).then((response) => {
      // commit('SET_CONNECTION_STATUS', response.data.message);
      msg = response.data.message;
    })
    return msg;
  },

  async connectToQuickbooks({commit}, payload) {
    var data;
    await quickbooksService.connectToQuickbooks(payload).then((response) => {
      data = response.data;
    })
    return data.payload['redirect'];
  },

  async disconnectToQuickbooks({commit}, payload) {
    var data;
    await quickbooksService.disconnectToQuickbooks(payload).then((response) => {
      data = response.data;
    })
    return data.payload['redirect'];
  },

  async processQuickbooksResponse({commit}, query) {
    var data;
    await quickbooksService.processQuickbooksResponse(query).then(
        (response) => {
          data = response.data;
        })
    return data.payload['redirect'];
  },

}
