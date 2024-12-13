import driverService from '@/services/DriverService'

export default {
  getDriverDatatable ({commit}, {
    eventForServer,
    filter
  }) {
    return driverService.getDriverDatatable(eventForServer, filter)
      .then((data) => {
        commit('SET_DRIVERS', data)
        return data
      })
  },

  getAllDrivers ({commit}) {
    return driverService.getAllDrivers()
      .then(({data}) => {
        // commit('SET_DRIVERS', data.payload)
        return data
      })
  },

  createDriver ({commit}, payload) {
    return driverService.createDriver(payload)
      .then(({data}) => {
        // commit('CREATE_DRIVER', data.payload)
        return data
      })
  },

  updateDriver ({commit}, payload) {
    return driverService.updateDriver(payload)
      .then(({data}) => {
        // commit('UPDATE_DRIVER', data.payload)
        return data
      })
  },

  deleteDriver ({commit}, driverId) {
    return driverService.deleteDriver(driverId)
      .then(({data}) => {
        commit('DELETE_DRIVER', driverId)
        return data
      })
  },

  changeStatus ({commit}, payload) {
    return driverService.changeStatus(payload)
      .then(({data}) => {
        // commit('DRIVER_CHANGE_STATUS', payload)
        return data
      })
  },

  deleteDriverFile ({commit}, document) {
    return driverService.deleteDriverFile(document.driver_file_id)
      .then(({data}) => {
        commit('DELETE_DRIVER_FILE', document)
        return data
      })
  }
}
