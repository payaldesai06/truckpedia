import taskAutomationService from '@/services/TaskAutomationService'

export default {
  getTaskAutomation() {
    return taskAutomationService.getTaskAutomation();
  },

  updateTaskAutomation({commit}, payload) {
    return taskAutomationService.updateTaskAutomation(payload);
  },
}
