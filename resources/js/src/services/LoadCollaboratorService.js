import axios from '../http/axios'

export default {
  async getLoadCollaborators(collaborator) {
    return await axios.get(`/load-collaborator/details/${collaborator.load_id}`)
  },

  async createCollaborator(collaborator) {
    return await axios.post('/load-collaborator', collaborator)
  },

  async updateCollaborator(collaborator) {
    return await axios.patch(
        `/load-collaborator/${collaborator.id}`, collaborator)
  },

  async deleteCollaborator(collaborator) {
    return await axios.delete(`/load-collaborator/${collaborator.id}`)
  },
}
