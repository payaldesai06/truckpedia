import axios from '../http/axios'

export default {
  async getAllAutomations() {
    return axios.get('/automation/get-all-automations')
        .then((res) => {return res.data.payload})
  },
  async updateAutomation(automation) {
    return await axios.post('/automation/update-automation', automation)
  },
  async createAutomation(payload) {
    return await axios.post('/automation/create-automation', payload)
  },
  async deleteScheduleAutomation(payload) {
    return await axios.post('/automation/delete-automation', payload)
  },
}
