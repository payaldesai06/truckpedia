export default {
  SET_ADDRESSES(state, addresses) {
    state.addresses = addresses
  },

  CREATE_ADDRESS(state, address) {
    state.addresses.data.unshift(address)
  },

  UPDATE_ADDRESS(state, address) {
    state.addresses.data = state.addresses.data.map(
        (s) => {return (s.id == address.id) ? (s = address) : s})
  },

  DELETE_ADDRESS(state, id) {
    state.addresses.data = state.addresses.data.filter(t => t.id !== id)
  }
}
