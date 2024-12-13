import {
  fetchAllUsers,
  fetchAllWebUsers,
  fetchUsers
} from '../../services/CompanyUserService-v2'

export default {
  async fetchAllUsers ({ commit }) {
    const {
      data: { payload }
    } = await fetchAllUsers()

    commit('setAllUsers', payload || [])
  },
  async fetchAllWebUsers ({ commit }) {
    const {
      data: { payload }
    } = await fetchAllWebUsers()

    commit('setAllWebUsers', payload || [])
  },
  async fetchUsers({ commit }, params) {
    const {
      data: { payload },
    } = await fetchUsers(params);

    commit('setUsers', { params, users: payload.users });
  },
}
