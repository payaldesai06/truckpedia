import {
  getIncidentList,
  setUserCustomization,
  shareLink,
  createIncident,
  getIncidentDetails,
  updateIncident,
  deleteIncident,
  getUploadUrls,
  saveFiles,
  getIncidentFiles,
  deleteIncidentFile,
  updateIncidentFile,
  viewIncidentFiles,
  getDataForCharts,
  getYearlyComparisonDataForCharts,
  sendEmail,
  deleteEmail,
  getCount,
  createNote,
  updateNote,
  deleteNote,
  getLinksForFiles,
} from '@/services/IncidentService';

export default {
  async fetchIncidentList(
    _,
    { page, pageSize, filters = {}, sortBy = {}, toDownload = false }
  ) {
    const result = await getIncidentList(
      page,
      pageSize,
      filters,
      sortBy,
      toDownload
    );
    return result;
  },
  async setUserCustomization(_, payload) {
    const response = await setUserCustomization(payload);
    return response;
  },
  async shareLink(_, payload) {
    const response = await shareLink(payload);
    return response;
  },
  async createIncident(_, payload) {
    const response = await createIncident(payload);
    return response;
  },
  async getIncidentDetails(_, id) {
    const response = await getIncidentDetails(id);
    return response;
  },
  async updateIncident(_, payload) {
    const response = await updateIncident(payload);
    return response;
  },
  async deleteIncident(_, id) {
    const response = await deleteIncident(id);
    return response;
  },
  async getUploadUrls(_, payload) {
    const response = await getUploadUrls(payload);
    return response;
  },
  async saveFiles(_, payload) {
    const response = await saveFiles(payload);
    return response;
  },
  async getIncidentFiles(_, id) {
    const response = await getIncidentFiles(id);
    return response;
  },
  async deleteIncidentFile(_, id) {
    const response = await deleteIncidentFile(id);
    return response;
  },
  async updateIncidentFile(_, payload) {
    const response = await updateIncidentFile(payload);
    return response;
  },
  async viewIncidentFiles(_, payload) {
    const response = await viewIncidentFiles(payload);
    return response;
  },
  async getDataForCharts(_, payload) {
    const response = await getDataForCharts(payload);
    return response;
  },
  async getYearlyComparisonDataForCharts(_, payload) {
    const response = await getYearlyComparisonDataForCharts(payload);
    return response;
  },
  async sendEmail(_, payload) {
    const response = await sendEmail(payload);
    return response;
  },
  async deleteEmail(_, payload) {
    const response = await deleteEmail(payload);
    return response;
  },
  async getCount(_, payload) {
    const response = await getCount(payload);
    return response;
  },
  async createNote(_, payload) {
    const response = await createNote(payload);
    return response;
  },
  async updateNote(_, payload) {
    const response = await updateNote(payload);
    return response;
  },
  async deleteNote(_, payload) {
    const response = await deleteNote(payload);
    return response;
  },
  async getLinksForFiles(_, payload) {
    const response = await getLinksForFiles(payload);
    return response;
  },
};
