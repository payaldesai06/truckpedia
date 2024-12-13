import samsaraService from '@/services/SamsaraService'

export default {
  async getConnectionStatus ({commit}) {
    var msg = ''
    await samsaraService.getConnectionStatus().then((response) => {
      commit('SET_CONNECTION_STATUS', response.data.message)
      msg = response.data.message
    }, (error) => {
      console.log('Error: ', error)
    })
    return msg
  },

  async connectToSamsara () {
    var data
    await samsaraService.connectToSamsara().then((response) => {
      data = response.data
    }, (error) => {
      console.log('Error: ', error)
    })
    return data.payload['redirect']
  },

  async disconnectToSamsara({ commit }) {
    var data
    await samsaraService.disconnectToSamsara().then((response) => {
      if (response.status === 200) {
        commit('SET_CONNECTION_STATUS', 'Not connected');
      }
      data = response.data
    }, (error) => {
      console.log('Error: ', error)
    })
    return data.payload['redirect']
  },

  async processSamsaraResponse ({commit}, query) {
    var data;
    await samsaraService.processSamsaraResponse(query).then((response) => {
      data = response.data;
    }, (error) => {
      console.log('Error: ', error)
    })
    return data.payload.redirect;
  },

  async getDriversFuelEnergyReports(_, query) {
    return await samsaraService.getDriversFuelEnergyReports(query);
  },

  async getTrucksFuelEnergyReports(_, query) {
    return await samsaraService.getTrucksFuelEnergyReports(query);
  }
}
