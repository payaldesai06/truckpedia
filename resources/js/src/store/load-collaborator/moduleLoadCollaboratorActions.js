import loadCollaboratorService from '@/services/LoadCollaboratorService'

export default {
  getLoadCollaborators({commit}, payload) {
    return loadCollaboratorService.getLoadCollaborators(payload).then(
        ({data}) => {return data})
  },

  createCollaborator({commit}, payload) {
    return loadCollaboratorService.createCollaborator(payload).then(
        ({data}) => {return data})
  },

  updateCollaborator({commit}, payload) {
    return loadCollaboratorService.updateCollaborator(payload).then(
        ({data}) => {return data})
  },

  deleteCollaborator({commit}, payload) {
    return loadCollaboratorService.deleteCollaborator(payload).then(
        ({data}) => data)
  },
}
