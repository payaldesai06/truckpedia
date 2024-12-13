import axios from '../http/axios';
import axiosNode from '../http/axiosNode';

export const getTimeline = (dateRange) => {
  return axios.post(`v2/planning/get-timeline`, dateRange);
};

export const createSchedule = (payload) => {
  return axios.post(`v2/planning/schedules/create`, payload);
};

export const updateSchedule = (payload) => {
  return axios.patch(`v2/planning/schedules/edit`, payload);
};

export const batchScheduleUpdate = (payload) => {
  return axios.patch(`v2/planning/schedules/batch-update`, payload);
};

export const deleteSchedule = (payload) => {
  // payload: {
  //   truckAvalOnceSchedId: // only if truckAvalOnceSchedId available
  //   truckAvalRptSchedId: // only if truckAvalRptSchedId available
  // }
  return axios.delete(`v2/planning/schedules/delete`, { data: payload });
};

export const createDriverTimeOff = (payload) => {
  return axios.post(`v2/planning/driver-time-off-calendar/create`, payload);
};

export const updateDriverTimeOff = (payload) => {
  return axios.patch(`v2/planning/driver-time-off-calendar/edit`, payload);
};

export const deleteDriverTimeOff = (data) => {
  return axios.delete('v2/planning/driver-time-off-calendar/delete', { data });
};

export const getDriverTimeOffCalender = (data) => {
  return axios.post(`v2/planning/driver-time-off-calendar/get-list`, data);
};

export const updateAccessorialFee = (payload) => {
  return axiosNode.post(`planning/accessorialFee/update`, payload);
};

export const getAccessorialFee = () => {
  return axiosNode.get(`planning/accessorialFee/get`);
};

export const setUserCustomization = (payload) => {
  return axios.post('v2/planning/timeline/setCustomization', payload);
};
