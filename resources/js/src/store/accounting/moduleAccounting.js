import state from './moduleAccountingState.js';
import mutations from './moduleAccountingMutations.js';
import actions from './moduleAccountingActions.js';
import getters from './moduleAccountingGetters.js';

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
