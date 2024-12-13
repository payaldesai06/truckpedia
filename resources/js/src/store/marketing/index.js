import actions from './actions.js';
import state from './state.js';
import getters from './getters.js';
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
