import axios from '../../http/axios'
import qs from 'querystring'
import truckService from '../../services/TruckService'

export default {
  getTruckDatatable ({commit}, {
    eventForServer,
    filter
  }) {
    return truckService.getTruckDatatable(eventForServer, filter).then(data => {
      commit('SET_TRUCKS', data)
      return data
    })
  },

  getAllTrucks ({commit}) {
    return truckService.getAllTrucks()
      .then(({data}) => {
        commit('setAllTrucks', data.payload.data || [])
        return data
      })
  },

  createTruck ({commit}, payload) {
    return truckService.create(payload)
      .then(({data}) => {
        // commit('CREATE_TRUCK', data.payload)
        return data
      })
  },

  updateTruck ({commit}, payload) {
    return truckService.update(payload)
      .then(({data}) => {
        // commit('UPDATE_TRUCK', data.payload)
        return data
      })
  },

  deleteTruck ({commit}, truckId) {
    return truckService.delete(truckId)
      .then(({data}) => {
        commit('DELETE_TRUCK', truckId)
        return data
      })
  },

  changeStatus ({commit}, payload) {
    return truckService.changeStatus(payload)
      .then(({data}) => data)
  }
}
