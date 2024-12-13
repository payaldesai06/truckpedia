import keepTruckinService from '@/services/KeepTruckinService'

export default {
  async getConnectionStatus({commit}) {
    var msg = '';
    await keepTruckinService.getConnectionStatus().then(
        (response) => {
          msg = response.data.message;
        },
        (error) => {
          console.log('Error: ', error);
        })
    return msg;
  },

  async connectToKeepTruckin() {
    var data;
    await keepTruckinService.connectToKeepTruckin().then(
        (response) => {
          data = response.data;
        },
        (error) => {
          console.log('Error: ', error);
        })
    return data.payload['redirect'];
  },

  async disconnectToKeepTruckin() {
    var data;
    await keepTruckinService.disconnectToKeepTruckin().then(
        (response) => {
          data = response.data;
        },
        (error) => {
          console.log('Error: ', error);
        })
    return data.payload['redirect'];
  },

  async processKeepTruckinResponse({commit}, query) {
    var data;
    await keepTruckinService.processKeepTruckinResponse(query).then(
        (response) => {
          data = response.data;
        },
        (error) => {
          console.log('Error: ', error);
        })
    return data.payload.redirect;
  }
}
