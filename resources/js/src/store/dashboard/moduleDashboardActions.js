import dashboardService from '@/services/DashboardService'

export default {
  getTripStats ({commit}, {eventForServer, filter}) {
    return dashboardService.getTripStats(eventForServer, filter)
      .then(({data}) => {
        commit('SET_DASHBOARD_TRIP_STATS', data.payload)
        return data
      })
  },

  getTripRevenue ({commit}, {eventForServer, filter}) {
    return dashboardService.getTripRevenue(eventForServer, filter)
      .then(({data}) => {
        commit('SET_DASHBOARD_TRIP_REVENUE', data.payload.data)
        return data
      })
  },

  getLoadDatatable ({commit}, {eventForServer, filter}) {
    return dashboardService.getLoadDatatable(eventForServer, filter)
      .then(data => {
        commit('SET_DASHBOARD_LOAD_DATATABLE', data)
        return data
      })
  }
}
