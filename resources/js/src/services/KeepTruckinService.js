import axios from '../http/axios'

export default {
  async getConnectionStatus() {
    return await axios.get('/keepTruckin/connection-status')
  },

  async connectToKeepTruckin() {
    return await axios.get('/keepTruckin/connect')
  },

  async disconnectToKeepTruckin() {
    return await axios.delete('/keepTruckin/disconnect')
  },

  async processKeepTruckinResponse(query) {
    return await axios.get('/keepTruckin/auth_callback', query)
  },
}
