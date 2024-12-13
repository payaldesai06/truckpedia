import axios from '../http/axios'

export default {
  async getCustomizations() {
    return await axios.get('/customization')
  },

  async updateCustomizations(payload) {
    return await axios.patch('/customization', payload)
  }
}
