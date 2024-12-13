import {
  fetchVehicles,
  fetchAllVehicles
} from '../../services/VehicleService-v2'

export default {
  async fetchVehicles ({ commit }) {
    const {
      data: { payload }
    } = await fetchVehicles()

    commit('setVehicles', payload || {})
  },
  async fetchAllVehicles ({ commit }, payload = {}) {
    const result = await fetchAllVehicles(payload)
    commit('setAllVehicles', result.data.payload || {})
    return result
  }
}
