import companyUserService from '@/services/CompanyUserService'

export default {
  getCompanyUserDatatable({commit}, {eventForServer, filter}) {
    return companyUserService.getCompanyUserDatatable(eventForServer, filter).then(data => {
      commit('SET_COMPANY_USERS', data)
      return data
    })
  },

  getAllDispatchers({commit}, filters = null) {
    return companyUserService.getAllDispatchers(filters).then(
        ({data}) => {// commit('SET_DISPATCHERS', data.payload)
                     return data})
  },

  createCompanyUser({commit}, payload) {
    return companyUserService.createCompanyUser(payload)
      .then(({ data }) => {
        commit('CREATE_COMPANY_USER', data.payload)
        return data
      })
  },

  updateCompanyUser({commit}, payload) {
    return companyUserService.updateCompanyUser(payload)
      .then(({ data }) => {
        commit('UPDATE_COMPANY_USER', data.payload)
        return data
      })
  },

  deleteCompanyUser({commit}, customerId) {
    return companyUserService.deleteCompanyUser(customerId)
      .then(({ data }) => {
        commit('DELETE_COMPANY_USER', customerId)
        return data
      })
  },

  changeStatus({commit}, payload) {
    return companyUserService.changeStatus(payload).then(({data}) => data)
  },

  getCurrentUserTagIds() {
    return companyUserService.getCurrentUserTagIds().then(
        ({data}) => data.payload);
  },
  
  getCompanyLogoPreSignedS3Url({commit}, payload) {
    return companyUserService.getCompanyLogoPreSignedS3Url(payload)
  },

  getUserProfileImagePreSignedS3Url({commit}, payload) {
    return companyUserService.getUserProfileImagePreSignedS3Url(payload)
  },
}
