import truckStopService from '@/services/external-load-boards/TruckStopService.js'

export default {
  connectionStatus() {
    return truckStopService.connectionStatus().then(({data}) => {return data});
  },
  getIntegrationId() {
    return truckStopService.getIntegrationId().then(({data}) => {return data});
  },
  postIntegrationId({commit}, payload) {
    return truckStopService.postIntegrationId(payload).then(
        ({data}) => {return data});
  },
  deleteIntegrationId({commit}, payload) {
    return truckStopService.deleteIntegrationId(payload).then(
        ({data}) => {return data});
  },
  searchLoads({commit}, payload) {
    return truckStopService.searchLoads(payload).then(({data}) => {return data})
  }
}
