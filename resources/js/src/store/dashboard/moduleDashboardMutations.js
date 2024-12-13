export default {
  SET_DASHBOARD_TRIP_STATS (state, tripStats) {
    state.tripStats = tripStats
  },

  SET_DASHBOARD_TRIP_REVENUE (state, tripRevenue) {
    state.tripRevenue = tripRevenue
  },

  SET_DASHBOARD_LOAD_DATATABLE (state, loads) {
    state.loads = loads
  }
}
