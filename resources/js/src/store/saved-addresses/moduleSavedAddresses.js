import actions from './moduleSavedAddressesActions.js'
import getters from './moduleSavedAddressesGetters.js'
import mutations from './moduleSavedAddressesMutations.js'
import state from './moduleSavedAddressesState.js'

export default {
  namespaced: true, 
  state, 
  mutations, 
  actions, 
  getters
}
