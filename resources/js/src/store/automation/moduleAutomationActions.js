import AutomationService from '@/services/AutomationService'

export default {
  getAllAutomations({commit}) {
    return AutomationService.getAllAutomations().then((data) => {return data})
  },

  updateAutomation({commit}, payload) {
    return AutomationService.updateAutomation(payload).then(
        (data) => {return data})
  },
  createAutomation({commit}, payload) {
    return AutomationService.createAutomation(payload).then(
        (data) => {return data})
  },
  deleteScheduleAutomation({commit}, payload) {
    return AutomationService.deleteScheduleAutomation(payload).then(
        (data) => {return data})
  },
}
