import state from './moduleTransactionState.js'
import mutations from './moduleTransactionMutations.js'
import actions from './moduleTransactionActions.js'
import getters from './moduleTransactionGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
