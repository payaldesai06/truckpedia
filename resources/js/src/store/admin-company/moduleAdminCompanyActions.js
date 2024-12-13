import adminCompanyService from '@/services/AdminCompanyService'

export default {
  getAdminCompanyDatatable({commit}, {eventForServer, filter}) {
    return adminCompanyService.getAdminCompanyDatatable(eventForServer, filter)
      .then(data => {
        commit('SET_ADMIN_COMPANIES', data) //companies
        return data
      });
  },

  getAdminCompany({commit}, {id, startDate, endDate}) {
    return adminCompanyService.getAdminCompany(id, startDate, endDate);
  },

  updateCompanyMonthlyFees({commit}, payload) {
    return adminCompanyService.updateCompanyMonthlyFees(payload.id, payload)
  },

  updateCompanyTrialValidTill({commit}, payload) {
    return adminCompanyService.updateCompanyTrialValidTill(payload.id, payload)
  },

  updateCompanyFeatureAccess({commit}, payload) {
    return adminCompanyService.updateCompanyFeatureAccess(payload.id, payload)
  },

  createUserAsAdmin({commit}, payload) {
    const { id, ...data } = payload
    return adminCompanyService.createUserAsAdmin(id, data)
  }
}
