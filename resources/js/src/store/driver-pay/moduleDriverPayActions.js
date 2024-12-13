import driverPayService from '@/services/DriverPayService'

export default {
  getDriverDatatable ({commit}, {
    eventForServer,
    filter
  }) {
    return driverPayService.getDriverPayDatatable(eventForServer, filter)
      .then((data) => {
        commit('SET_DRIVER_PAYS', data)
        return data
      })
  }
}
