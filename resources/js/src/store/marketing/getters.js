export default {
  pipelines: (state) => state.pipelines,
  selectedPipeline: (state) => state.selectedPipeline,
  selectedDeal: (state) => state.selectedDeal,
  getAllDeals: (state) => state.allDeals,
  getDealContacts: (state) => state.dealContacts,
  getDealTasks: (state) => state.dealTasks,
  getContactsForCampaign: (state) => state.contactsForCampaign,
  getAllContacts: (state) => state.allContacts,
  getAllMarketingEmails: (state) => state.allMarketingEmails,
  getCampaignTemplates: (state) => state.campaignTemplates,
  getCachedMarketingEmails: (state) => state.cachedMarketingEmails,
  getSelectedUsersForDealsFilter: (state) => state.selectedUsersForDealsFilter,
};
