import axios from '../../http/axios'
import qs from 'querystring'
import trailerService from '@/services/TrailerService'

export default {
  getTrailerDatatable ({commit}, {
    eventForServer,
    filter
  }) {
    return trailerService.getTrailerDatatable(eventForServer, filter).then(data => {
      commit('SET_TRAILERS', data)
      return data
    })
  },

  getAllTrailers ({commit}) {
    return trailerService.getAllTrailers()
      .then(({data}) => {
        commit('setAllTrailers', data.payload.data || [])
        return data
      })
  },

  createTrailer ({commit}, payload) {
    return trailerService.createTrailer(payload)
      .then(({data}) => {
        commit('CREATE_TRAILER', data.payload)
        return data
      })
  },

  updateTrailer ({commit}, payload) {
    return trailerService.updateTrailer(payload)
      .then(({data}) => {
        commit('UPDATE_TRAILER', data.payload)
        return data
      })
  },

  deleteTrailer ({commit}, trailerId) {
    return trailerService.deleteTrailer(trailerId)
      .then(({data}) => {
        commit('DELETE_TRAILER', trailerId)
        return data
      })
  },

  changeStatus ({commit}, payload) {
    return trailerService.changeStatus(payload)
      .then(({data}) => data)
  }
}
