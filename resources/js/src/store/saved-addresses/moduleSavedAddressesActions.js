import savedAddressesService from '@/services/SavedAddressesService'

export default {
  getSavedAddressesDatatable({commit}, {eventForServer, filter}) {
    return savedAddressesService.getSavedAddressesDatatable(eventForServer, filter).then(data => {
      commit('SET_ADDRESSES', data)
      return data
    })
  },

  createAddress({commit}, payload) {
    return savedAddressesService.createAddress(payload)
      .then(({data}) => {
        commit('CREATE_ADDRESS', data.payload)
        return data
      })
  },

  updateAddress({commit}, payload) {
    return savedAddressesService.updateAddress(payload)
      .then(({data}) => {
        commit('UPDATE_ADDRESS', '', data.payload)
        return data
      })
  },

  deleteAddress({commit}, id) {
    return savedAddressesService.deleteAddress(id)
      .then(({data}) => {
        commit('DELETE_ADDRESS', id)
        return data
      })
  },

  searchAddresses({commit}, name) {
    return savedAddressesService.searchAddresses(name).then(
        ({data}) => {return data})
  }
}
