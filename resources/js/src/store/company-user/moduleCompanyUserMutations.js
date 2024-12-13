export default {
  SET_COMPANY_USERS (state, companyUsers) {
    state.companyUsers = companyUsers
  },

  CREATE_COMPANY_USER (state, companyUser) {
    state.companyUsers.data.unshift(companyUser)
  },

  UPDATE_COMPANY_USER (state, companyUser) {
    state.companyUsers.data =  state.companyUsers.data.map((cu) => {
      return (cu.user_id == companyUser.user_id) ? (cu = companyUser) : cu
    })
  },

  DELETE_COMPANY_USER (state, companyUserId) {
    state.companyUsers.data = state.companyUsers.data.filter(cu => cu.user_id != companyUserId)
  }
}
