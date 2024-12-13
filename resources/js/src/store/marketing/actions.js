import {
  createLead,
  updateLead,
  deleteLead,
  getCampaigns,
  createCampaign,
  updateCampaign,
  getCampaignById,
  getLeads,
  getEmailAccountList,
  gmailInit,
  gmailAuthCallback,
  outlookInit,
  outlookAuthCallback,
  upsertSequence,
  getSequence,
  getEmailAccountDetails,
  updateEmailAccount,
  getThreads,
  getThreadMessages,
  getMessageAttachments,
  getAnalytics,
  deleteEmailAccount,
  updateThreadMessage,
  getContacts,
  saveContacts,
  getContactDetail,
  updateContacts,
  getMarketingPipelines,
  createPipeline,
  editPipeline,
  createDeal,
  getDeals,
  getSingleDeal,
  editDeal,
  saveTasks,
  updateTasks,
  getTaskDetail,
  getLogs,
  getTasks,
  createMarketingDealNotes,
  getMarketingDealNotes,
  updateMarketingDealNotes,
  createEmailForDeal,
  getSingleEmailForDeal,
  getAllEmailsForDeal,
  getEmailByIdForDeal,
  getCampaignTemplates,
  createCampaignTemplate,
  getCampaignTemplateById,
  updateCampaignTemplate,
  getLeadsforCampaign,
  deleteCampaign,
  deleteSelectedLead,
} from '@/services/MarketingService';

export default {
  async getCampaigns(_, payload = {}) {
    const response = await getCampaigns(payload);
    return response;
  },
  async getCampaignById(_, { id, superAdminOverwriteCompanyId }) {
    const response = await getCampaignById(id, superAdminOverwriteCompanyId);
    return response;
  },
  async createCampaign(_, payload) {
    const response = await createCampaign(payload);
    return response;
  },
  async updateCampaign(_, payload) {
    const response = await updateCampaign(payload);
    return response;
  },
  async createLead(_, payload) {
    const response = await createLead(payload);
    return response;
  },
  async updateLead(_, payload) {
    const response = await updateLead(payload);
    return response;
  },
  async deleteLead(_, payload) {
    const response = await deleteLead(payload);
    return response;
  },
  async deleteCampaign(_, { id, superAdminOverwriteCompanyId }) {
    const response = await deleteCampaign(id, superAdminOverwriteCompanyId);
    return response;
  },
  async getLeads(_, payload = {}) {
    const response = await getLeads(payload);
    return response;
  },
  async getEmailAccountList(_, payload = {}) {
    const response = await getEmailAccountList(payload);
    return response;
  },
  async gmailInit() {
    const response = await gmailInit();
    return response;
  },
  async gmailAuthCallback(_, payload) {
    const response = await gmailAuthCallback(payload);
    return response;
  },
  async outlookInit() {
    const response = await outlookInit();
    return response;
  },
  async outlookAuthCallback(_, payload) {
    const response = await outlookAuthCallback(payload);
    return response;
  },
  async upsertSequence(_, { id, payload }) {
    const response = await upsertSequence(id, payload);
    return response;
  },
  async getSequence(_, { id, params }) {
    const response = await getSequence(id, params);
    return response;
  },
  async getEmailAccountDetails(_, id) {
    const response = await getEmailAccountDetails(id);
    return response;
  },
  async updateEmailAccount(_, payload) {
    const response = await updateEmailAccount(payload);
    return response;
  },
  async getThreads(_, { id, payload }) {
    const response = await getThreads(id, payload);
    return response;
  },
  async getThreadMessages(_, { id, threadId, payload }) {
    const response = await getThreadMessages(id, threadId, payload);
    return response;
  },
  async getMessageAttachments(_, { id, messageId, payload }) {
    const response = await getMessageAttachments(id, messageId, payload);
    return response;
  },
  async getAnalytics(_, payload) {
    const response = await getAnalytics(payload);
    return response;
  },
  async deleteEmailAccount(_, id) {
    const response = await deleteEmailAccount(id);
    return response;
  },
  async updateThreadMessage(_, payload) {
    const response = await updateThreadMessage(payload);
    return response;
  },
  async getContacts(_, payload) {
    const response = await getContacts(payload);
    return response;
  },
  async saveContacts(_, payload) {
    const response = await saveContacts(payload);
    return response;
  },
  async getContactDetail(_, { id }) {
    const response = await getContactDetail(id);
    return response;
  },
  async updateContacts(_, { id, payload }) {
    const response = await updateContacts(id, payload);
    return response;
  },
  async setMarketingPipelines({ commit }) {
    const { data } = await getMarketingPipelines();
    commit('setMarketingPipelines', data.payload.pipelines);
  },
  async updateMarketingPipelines({ state, commit }, payload) {
    const clonnedPipelines = structuredClone(state.pipelines);
    const index = clonnedPipelines.findIndex((item) => item.id === payload.id);
    if (index >= 0) {
      clonnedPipelines[index] = payload;
    } else {
      clonnedPipelines.push(payload);
    }
    commit('setMarketingPipelines', clonnedPipelines);
    commit('setSelectedPipeline', payload);
  },
  async createPipeline(_, payload) {
    const response = await createPipeline(payload);
    return response;
  },
  async editPipeline(_, id) {
    const response = await editPipeline(id);
    return response;
  },
  async createDeal(_, payload) {
    const response = await createDeal(payload);
    return response;
  },

  async getDeals(_, payload) {
    const response = await getDeals(payload);
    return response;
  },
  async getSingleDeal(_, id) {
    const response = await getSingleDeal(id);
    return response;
  },
  async editDeal(_, payload) {
    const response = await editDeal(payload);
    return response;
  },
  async saveTasks(_, payload) {
    const response = await saveTasks(payload);
    return response;
  },
  async updateTasks(_, { id, payload }) {
    const response = await updateTasks(id, payload);
    return response;
  },
  async getTasks(_, payload) {
    const response = await getTasks(payload);
    return response;
  },
  async getTaskDetail(_, { id }) {
    const response = await getTaskDetail(id);
    return response;
  },
  async getLogs(_, payload) {
    const response = await getLogs(payload);
    return response;
  },
  async createMarketingDealNotes(_, payload) {
    const response = await createMarketingDealNotes(payload);
    return response;
  },
  async getMarketingDealNotes(_, payload) {
    const response = await getMarketingDealNotes(payload);
    return response;
  },
  async updateMarketingDealNotes(_, payload) {
    const response = await updateMarketingDealNotes(payload);
    return response;
  },
  async createEmailForDeal(_, payload) {
    const response = await createEmailForDeal(payload);
    return response;
  },
  async getSingleEmailForDeal(_, payload) {
    const response = await getSingleEmailForDeal(payload);
    return response;
  },
  async getAllEmailsForDeal(_, payload) {
    const response = await getAllEmailsForDeal(payload);
    return response;
  },
  async getEmailByIdForDeal(_, payload) {
    const response = await getEmailByIdForDeal(payload);
    return response;
  },
  async getCampaignTemplates({ commit }, payload = {}) {
    const response = await getCampaignTemplates(payload);
    commit('setCampaignTemplates', response.data.payload);
    return response;
  },
  async getCampaignTemplateById(_, { id, params = {} }) {
    const response = await getCampaignTemplateById(id, params);
    return response;
  },
  async createCampaignTemplate({ commit }, payload) {
    const response = await createCampaignTemplate(payload);
    commit('clearCampaignTemplates');
    return response;
  },
  async updateCampaignTemplate({ commit }, data) {
    const response = await updateCampaignTemplate(data.id, data.payload);
    commit('setCampaignTemplates', response.data.payload);
    return response;
  },
  async getLeadsforCampaign(_, payload) {
    const response = await getLeadsforCampaign(payload);
    return response;
  },
  async deleteSelectedLead(_, payload) {
    const response = await deleteSelectedLead(payload);
    return response;
  },
};
