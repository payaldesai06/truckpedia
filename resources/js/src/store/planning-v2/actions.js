import {
  getTimeline,
  createSchedule,
  updateSchedule,
  deleteSchedule,
  createDriverTimeOff,
  updateDriverTimeOff,
  deleteDriverTimeOff,
  getDriverTimeOffCalender,
  batchScheduleUpdate,
  updateAccessorialFee,
  getAccessorialFee,
  setUserCustomization,
} from '@/services/PlanningService-v2';

export default {
  async getTimeline(_, payload) {
    const result = await getTimeline(payload);
    return result;
  },
  async createSchedule(_, payload) {
    const result = await createSchedule(payload);
    return result;
  },
  async updateSchedule(_, payload) {
    const result = await updateSchedule(payload);
    return result;
  },
  async batchScheduleUpdate(_, payload) {
    const result = await batchScheduleUpdate(payload);
    return result;
  },
  async deleteSchedule(_, payload) {
    const result = await deleteSchedule(payload);
    return result;
  },
  async createDriverTimeOff(_, payload) {
    const result = await createDriverTimeOff(payload);
    return result;
  },
  async updateDriverTimeOff(_, payload) {
    const result = await updateDriverTimeOff(payload);
    return result;
  },
  async deleteDriverTimeOff(_, payload) {
    const result = await deleteDriverTimeOff(payload);
    return result;
  },
  async getDriverTimeOffCalender(_, payload) {
    const result = await getDriverTimeOffCalender(payload);
    return result;
  },
  async updateAccessorialFee(_, payload) {
    const result = await updateAccessorialFee(payload);
    return result;
  },
  async getAccessorialFee({ commit }) {
    const result = await getAccessorialFee();
    const {
      data: { payload },
    } = result;
    commit('updateAccessorialFee', payload || {});
    return result;
  },
  async setUserCustomization(_, payload) {
    const response = await setUserCustomization(payload);
    return response;
  },
};
