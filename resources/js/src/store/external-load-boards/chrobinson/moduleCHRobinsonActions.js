import chrobinsonService from '@/services/external-load-boards/CHRobinsonService.js'

export default {
  connectionStatus() {
    return chrobinsonService.connectionStatus().then(({data}) => {return data});
  },

  getCarrierCode() {
    return chrobinsonService.getCarrierCode().then(({data}) => {return data});
  },

  postCarrierCode({commit}, payload) {
    return chrobinsonService.postCarrierCode(payload).then(
        ({data}) => {return data});
  },

  deleteCarrierCode({commit}, payload) {
    return chrobinsonService.deleteCarrierCode(payload).then(
        ({data}) => {return data});
  },

  searchLoads({commit}, payload) {
    return chrobinsonService.searchLoads(payload).then(
        ({data}) => {return data})
  }
}
