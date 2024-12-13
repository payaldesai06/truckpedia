import state from './moduleTripState.js'
import mutations from './moduleTripMutations.js'
import actions from './moduleTripActions.js'
import getters from './moduleTripGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
