import axiosNode from '../http/axiosNode';

const generatePayload = (params) => {
  const { page, pageSize, filters, sortBy, fieldsToQuery, ...rest } = params;
  const apiPayload = {
    ...rest,
  };

  if (page) {
    apiPayload.page = page;
  }
  if (pageSize) {
    apiPayload.pageSize = pageSize;
  }
  if (filters && Object.keys(filters).length) {
    apiPayload.filters = filters;
  }
  if (sortBy && Object.keys(sortBy).length) {
    apiPayload.sortBy = sortBy;
  }
  if (fieldsToQuery && fieldsToQuery.length) {
    apiPayload.fieldsToQuery = fieldsToQuery;
  }

  return apiPayload;
};

export const getCampaigns = (params) => {
  const apiPayload = generatePayload(params);
  return axiosNode.post('/marketing/campaign/getCampaigns', apiPayload);
};

export const getCampaignById = (id, superAdminOverwriteCompanyId = null) => {
  const url = superAdminOverwriteCompanyId
    ? `/marketing/campaign/?id=${id}&superAdminOverwriteCompanyId=${superAdminOverwriteCompanyId}`
    : `/marketing/campaign/?id=${id}`;
  return axiosNode.get(url);
};

export const createCampaign = (payload) => {
  return axiosNode.post('/marketing/campaign/create', payload);
};

export const updateCampaign = (payload) => {
  return axiosNode.patch(`/marketing/campaign/update`, payload);
};

export const createLead = (payload) => {
  return axiosNode.post('/marketing/campaign/lead/add', payload);
};

export const updateLead = (payload) => {
  return axiosNode.patch(`/marketing/campaign/lead/update`, payload);
};

export const deleteLead = (data) => {
  return axiosNode.delete('/marketing/campaign/lead', { data });
};

export const deleteCampaign = (id, superAdminOverwriteCompanyId = null) => {
  const url = superAdminOverwriteCompanyId
    ? `/marketing/campaign/${id}?superAdminOverwriteCompanyId=${superAdminOverwriteCompanyId}`
    : `/marketing/campaign/${id}`;
  return axiosNode.delete(url);
};

export const getLeads = (payload) => {
  const apiPayload = generatePayload(payload);
  return axiosNode.post('/marketing/campaign/lead/getLeads', apiPayload);
};

export const getEmailAccountList = (payload) => {
  const apiPayload = generatePayload(payload);
  return axiosNode.post('/marketing/integration/emailAccount/list', apiPayload);
};

export const gmailInit = () => {
  return axiosNode.get('/marketing/integration/emailAccount/oauth/gmail/init');
};

export const gmailAuthCallback = (payload) => {
  return axiosNode.post(
    '/marketing/integration/emailAccount/oauth/gmail/auth',
    payload
  );
};

export const outlookInit = () => {
  return axiosNode.get(
    '/marketing/integration/emailAccount/oauth/outlook/init'
  );
};

export const outlookAuthCallback = (payload) => {
  return axiosNode.post(
    '/marketing/integration/emailAccount/oauth/outlook/auth',
    payload
  );
};

export const upsertSequence = (id, payload) => {
  return axiosNode.post(`/marketing/campaign/${id}/sequence`, payload);
};

export const getSequence = (id, params = {}) => {
  return axiosNode.get(`/marketing/campaign/${id}/sequence`, { params });
};

export const getEmailAccountDetails = (id) => {
  return axiosNode.get(`/marketing/integration/emailAccount/${id}`);
};

export const updateEmailAccount = (payload) => {
  const { id, ...rest } = payload;
  return axiosNode.patch(`/marketing/integration/emailAccount/${id}`, rest);
};

export const getThreads = (id, payload) => {
  return axiosNode.get(`/marketing/integration/emailAccount/${id}/threads`, {
    params: payload,
  });
};

export const getThreadMessages = (id, threadId, payload) => {
  return axiosNode.get(
    `/marketing/integration/emailAccount/${id}/threads/${threadId}/messages`,
    {
      params: payload,
    }
  );
};

export const getMessageAttachments = (id, messageId, payload) => {
  return axiosNode.get(
    `/marketing/integration/emailAccount/${id}/messages/${messageId}/attachments`,
    {
      params: payload,
    }
  );
};

export const getAnalytics = (payload) => {
  const { id, ...rest } = payload;
  return axiosNode.get(`/marketing/campaign/${id}/analytics`, { params: rest });
};

export const deleteEmailAccount = (id) => {
  return axiosNode.delete(`/marketing/integration/emailAccount/${id}`);
};

export const updateThreadMessage = (payload) => {
  const { id, threadId, ...rest } = payload;
  return axiosNode.patch(
    `/marketing/integration/emailAccount/${id}/threads/${threadId}/messages/batchUpdate`,
    rest
  );
};

export const getContacts = (payload) => {
  return axiosNode.get('/marketing/contacts', { params: payload });
};

export const saveContacts = (payload) => {
  return axiosNode.post('/marketing/contacts', payload);
};

export const getContactDetail = (id) => {
  return axiosNode.get(`/marketing/contacts/${id}`);
};

export const getMarketingPipelines = () => {
  return axiosNode.get('/marketing/pipelines');
};

export const createPipeline = (payload) => {
  return axiosNode.post('/marketing/pipelines', payload);
};

export const editPipeline = (payload) => {
  const newPayload = structuredClone(payload);
  const id = newPayload.id;
  delete newPayload.id;
  return axiosNode.patch(`/marketing/pipelines/${id}`, newPayload);
};

export const getTasks = (payload) => {
  return axiosNode.get('/marketing/tasks', { params: payload });
};

export const createDeal = (payload) => {
  return axiosNode.post('/marketing/deals', payload);
};

export const getDeals = (payload) => {
  return axiosNode.get('/marketing/deals', { params: payload });
};

export const getSingleDeal = (id) => {
  return axiosNode.get(`/marketing/deals/${id}`);
};

export const editDeal = (payload) => {
  const newPayload = structuredClone(payload);
  const id = newPayload.id;
  delete newPayload.id;
  return axiosNode.patch(`/marketing/deals/${id}`, newPayload);
};

export const updateContacts = (id, payload) => {
  return axiosNode.patch(`/marketing/contacts/${id}`, payload);
};

export const saveTasks = (payload) => {
  return axiosNode.post('/marketing/tasks', payload);
};

export const updateTasks = (id, payload) => {
  return axiosNode.patch(`/marketing/tasks/${id}`, payload);
};

export const getTaskDetail = (id) => {
  return axiosNode.get(`/marketing/tasks/${id}`);
};

export const getLogs = (payload) => {
  return axiosNode.get(`/marketing/deals/${payload.id}/logs`, {
    params: payload.pagination,
  });
};
export const createMarketingDealNotes = async (payload) => {
  const { id, ...newPayload } = { ...payload };
  return axiosNode.post(`/marketing/deals/${id}/notes`, newPayload);
};

export const getMarketingDealNotes = async (payload) => {
  const { id, ...newPayload } = { ...payload };
  return axiosNode.get(`/marketing/deals/${id}/notes`, { params: newPayload });
};

export const updateMarketingDealNotes = async (payload) => {
  const { id, noteId, ...newPayload } = { ...payload };
  return axiosNode.patch(`/marketing/deals/${id}/notes/${noteId}`, newPayload);
};

export const createEmailForDeal = async (payload) => {
  const { id, ...newPayload } = { ...payload };
  return axiosNode.post(`/marketing/deals/${id}/emails`, newPayload);
};

export const getSingleEmailForDeal = async (payload) => {
  const { emailId, dealId } = payload;
  return axiosNode.get(`/marketing/deals/${dealId}/emails/${emailId}`);
};

export const getAllEmailsForDeal = async (payload) => {
  const { dealId, ...newPayload } = { ...payload };
  return axiosNode.get(`/marketing/deals/${dealId}/emails`, {
    params: newPayload,
  });
};

export const getEmailByIdForDeal = async (payload) => {
  const { dealId, emailId } = { ...payload };
  return axiosNode.get(`/marketing/deals/${dealId}/emails/${emailId}`);
};

export const getCampaignTemplates = async (payload) => {
  return axiosNode.get(`marketing/campaignTemplates`, { ...payload });
};

export const createCampaignTemplate = async (payload) => {
  return axiosNode.post(`marketing/campaignTemplates`, payload);
};

export const getCampaignTemplateById = async (id, params = {}) => {
  return axiosNode.get(`marketing/campaignTemplates/${id}`, { params });
};

export const updateCampaignTemplate = async (id, payload) => {
  return axiosNode.patch(`marketing/campaignTemplates/${id}`, { ...payload });
};
export const getLeadsforCampaign = async (payload) => {
  const {
    id,
    leadsNeeded,
    city,
    state,
    superAdminOverwriteCompanyId,
    industry,
  } = { ...payload };
  return axiosNode.post(`/marketing/campaigns/${id}/leads/addFromVault`, {
    leadsNeeded: leadsNeeded,
    city: city,
    state: state,
    superAdminOverwriteCompanyId: superAdminOverwriteCompanyId,
    industries: industry,
  });
};

export const deleteSelectedLead = async (payload) => {
  const { email } = payload;
  return axiosNode.delete('/marketing/leads', { params: { email } });
};
