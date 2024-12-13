import loadsMatchingService from '@/services/LoadsMatchingService.js'

export default {
  getAllLocateTruck({commit}) {
    return loadsMatchingService.getAllLocateTruck().then(
        (res) => {return res.data})
  },
  getAllTruckSchedules({commit}, filter) {
    return loadsMatchingService.getAllTruckSchedules(filter).then(
        (res) => {return res.data})
  },
  updateTruckReloadDestination({commit}, payload) {
    return loadsMatchingService.updateTruckReloadDestination(payload).then(
        (res) => {return res.data})
  },
  updateTruckDeadheadOrigin({commit}, payload) {
    return loadsMatchingService.updateTruckDeadheadOrigin(payload).then(
        (res) => {return res.data})
  },
  updateTruckDeadheadDestination({commit}, payload) {
    return loadsMatchingService.updateTruckDeadheadDestination(payload).then(
        (res) => {return res.data})
  },
  updateTruckTargetPrice({commit}, payload) {
    return loadsMatchingService.updateTruckTargetPrice(payload).then(
        (res) => {return res.data})
  },
  updateTruckMaxWeight({commit}, payload) {
    return loadsMatchingService.updateTruckMaxWeight(payload).then(
        (res) => {return res.data})
  },
  updateTruckReloadDate({commit}, payload) {
    return loadsMatchingService.updateTruckReloadDate(payload).then(
        (res) => {return res.data})
  },
  getShareLink() {
    return loadsMatchingService.getShareLink().then((res) => {return res.data})
  },
  getShareAllLocateTruck({commit}, params) {
    return loadsMatchingService.getShareAllLocateTruck(params).then(
        (res) => {return res.data})
  },
  getShareAllSchedule({commit}, params) {
    return loadsMatchingService.getShareAllSchedule(params).then(
        (res) => {return res.data})
  },
}