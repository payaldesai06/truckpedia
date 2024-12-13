export default {
  setLoadsForPlanning(state, loads = []) {
    state.planningLoads = [...loads];
  },
};
