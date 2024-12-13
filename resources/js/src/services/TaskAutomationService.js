import axios from '../http/axios'

export default {
  async getTaskAutomation() {
    return await axios.get('/task-automation')
  },

  async updateTaskAutomation(payload) {
    return await axios.patch('/task-automation', payload)
  }
}
