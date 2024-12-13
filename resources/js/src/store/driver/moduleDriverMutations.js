export default {
  SET_DRIVERS (state, drivers) {
    state.drivers = drivers
  },

  CREATE_DRIVER (state, driver) {
    state.drivers.data.unshift(driver)
  },

  UPDATE_DRIVER (state, driver) {
    state.drivers.data =  state.drivers.data.map((d) => {
      return (d.driver_id == driver.driver_id) ? (d = driver) : d
    })
  },

  DELETE_DRIVER (state, driverId) {
    state.drivers.data = state.drivers.data.filter(t => t.user_id != driverId)
  },

  DELETE_DRIVER_FILE (state, document) {
    const driverIndex = state.drivers.data.findIndex((driver) => driver.driver_id == document.driver_id)

    state.drivers.data[driverIndex].driver_files = state.drivers.data[driverIndex].driver_files.filter(file => file.driver_file_id != document.driver_file_id)
  }
}
