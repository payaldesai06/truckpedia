export default {
  setAllUsers (state, users) {
    state.allUsers = users
  },
  setAllWebUsers (state, users) {
    state.allWebUsers = users
  },
  setUsers(state, { params, users }) {
    state.users = {
      ...state.users,
      [JSON.stringify(params)]: users,
    };
  },
  resetCachedUsers(state) {
    state.users = {};
  },
}
