import {
  fetchIssueList,
  fetchIssue,
  createIssue,
  deleteIssue,
  updateIssue,
  uploadAttachment,
  getServiceTypes,
  addServiceType
} from '../../services/MaintenanceService-v2'

export default {
  async fetchIssueList ({ commit }, payload = {}) {
    const result = await fetchIssueList(payload)
    if(!payload.hasOwnProperty("toDownload")){
      commit('setAllIssue', result.data.payload);
    }
    return result
  },

  async fetchIssue ({ commit }, id) {
    const result = await fetchIssue(id)
    commit('setSelectedIssue', result.data.payload) 
    return result
  },
  async createIssue (_, payload) {
    const result = await createIssue(payload)
    return result
  },
  async deleteIssue (_, id) {
    const result = await deleteIssue({ id })
    return result
  },
  async updateIssue (_, { id, payload }) {
    const result = await updateIssue(id, payload)
    return result
  },
  async uploadAttachment (_, payload) {
    const result = await uploadAttachment(payload)
    return result
  },
  async getServiceTypes ({commit}) {
    const result = await getServiceTypes();
    commit('setServiceTypes', result.data.payload);
  },
  async addServiceType (_, payload) {
    const result = await addServiceType(payload)
    return result;
  },
}
