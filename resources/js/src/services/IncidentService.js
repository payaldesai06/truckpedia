import axios from '../http/axios';

export const getIncidentList = (
  page,
  pageSize,
  filters,
  sortBy,
  toDownload = false
) => {
  return axios.post(`v2/safety/incident/getList?page=${page}`, {
    pageSize,
    filters,
    sortBy,
    toDownload,
  });
};

export const setUserCustomization = (payload) => {
  return axios.post('v2/safety/incident/setCustomization', payload);
};

export const shareLink = (payload) => {
  return axios.post('v2/safety/incident/share/getLink', payload);
};

export const createIncident = (payload) => {
  return axios.post('v2/safety/incident/create', payload);
};

export const getIncidentDetails = (id) => {
  return axios.get(`v2/safety/incident/${id}`);
};

export const updateIncident = (payload) => {
  return axios.patch('v2/safety/incident/edit', payload);
};

export const deleteIncident = (id) => {
  return axios.delete(`v2/safety/incident/${id}`);
};

export const getUploadUrls = (payload) => {
  return axios.post('v2/safety/incident/files/getUploadUrls', payload);
};

export const saveFiles = (payload) => {
  return axios.post('v2/safety/incident/files/create', payload);
};

export const getIncidentFiles = (id) => {
  return axios.post('v2/safety/incident/files/getList', { incidentId: id });
};

export const deleteIncidentFile = (id) => {
  return axios.delete('v2/safety/incident/files', { data: { id } });
};

export const updateIncidentFile = (payload) => {
  return axios.patch('v2/safety/incident/files/edit', payload);
};

export const viewIncidentFiles = (payload) => {
  return axios.post('v2/safety/incident/share/viewPage', payload);
};

export const getDataForCharts = (payload) => {
  return axios.post('v2/safety/incident/statistics/getDataForCharts', payload);
};

export const getYearlyComparisonDataForCharts = (payload) => {
  return axios.post(
    'v2/safety/incident/statistics/getYearlyComparisonDataForCharts',
    payload
  );
};

export const sendEmail = (payload) => {
  return axios.post('v2/safety/incident/emails/create', payload);
};

export const deleteEmail = (payload) => {
  return axios.delete('v2/safety/incident/emails', { data: payload });
};

export const getCount = (payload) => {
  return axios.post('v2/safety/incident/getCount', payload);
};

export const createNote = (payload) => {
  return axios.post('v2/safety/incident/notes/create', payload);
};

export const updateNote = (payload) => {
  return axios.patch('v2/safety/incident/notes/edit', payload);
};

export const deleteNote = (payload) => {
  return axios.delete('v2/safety/incident/notes', { data: payload });
};

export const getLinksForFiles = (payload) => {
  return axios.post('v2/safety/incident/share/getLinksForFiles', payload);
};
