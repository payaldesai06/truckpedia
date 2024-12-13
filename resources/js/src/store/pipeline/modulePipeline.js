import state from './modulePipelineState.js'
import mutations from './modulePipelineMutations.js'
import actions from './modulePipelineActions.js'
import getters from './modulePipelineGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
