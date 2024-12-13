import qbdService from '@/services/QbdService'

export default {
  async getConnectionStatusAll({commit}) {
    return await qbdService.getConnectionStatusAll().then((response) => {
      commit('SET_QBD_CONNECTION_STATUS', response.data.payload);
      return response.data.payload;
    })
  },

  async getConnectionStatus({commit}, tagId = '') {
    var msg = '';
    await qbdService.getConnectionStatus(tagId).then((response) => {
      // commit('SET_CONNECTION_STATUS', response.data.message);
      msg = response.data.message;
    })
    return msg;
  },

  async connectToQuickbooks({commit}, payload) {
    var data;
    await qbdService.connectToQuickbooks(payload).then((response) => {
      data = response.data;
    })
    return data;
  },

  async disconnectToQuickbooks({commit}, payload) {
    var data;
    await qbdService.disconnectToQuickbooks(payload).then((response) => {
      data = response.data;
    })
    return data.payload['redirect'];
  },
}
