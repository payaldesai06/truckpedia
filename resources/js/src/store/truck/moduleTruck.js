import state from './moduleTruckState.js'
import mutations from './moduleTruckMutations.js'
import actions from './moduleTruckActions.js'
import getters from './moduleTruckGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
