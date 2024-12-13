import axios from '../http/axios'

export default {
  // Setup Profile
  async setupProfile (payload) {
    return await axios.post('/admin/setup-profile', payload)
  },

  async updateProfile (payload) {
    return await axios.post('/admin/update-profile', payload)
  },

  async changePassword (payload) {
    return await axios.post('/admin/change-password', payload)
  },
  async singleStepRegistration(payload){
    return await axios.post('truckpedia/auth/carrier-one-step-register', payload);
  }
}
