export default {
  setMarketingPipelines: (state, payload) => {
    state.pipelines = payload;
  },
  setSelectedPipeline: (state, payload) => {
    state.selectedPipeline = payload;
  },
  setSelectedDeal: (state, payload) => {
    state.selectedDeal = payload;
  },
  setAllDeals: (state, payload) => {
    state.allDeals = payload;
  },
  setDealContacts: (state, payload) => {
    state.dealContacts = payload;
  },
  setDealTasks: (state, payload) => {
    state.dealTasks = payload;
  },
  setContactsForCampaign: (state, payload) => {
    state.contactsForCampaign = payload;
  },
  setAllContacts: (state, payload) => {
    state.allContacts = payload;
  },
  setMarketingEmails: (state, payload) => {
    state.allMarketingEmails = payload;
  },
  setCampaignTemplates: (state, payload) => {
    state.campaignTemplates = payload;
  },
  clearCampaignTemplates: (state, payload) => {
    state.campaignTemplates = null;
  },
  setCachedMarketingEmails: (state, payload) => {
    state.cachedMarketingEmails = {
      ...state.cachedMarketingEmails,
      [payload.id]: payload.emails,
    };
  },
  setSelectedUsersForDealsFilter : (state, payload) => {
    state.selectedUsersForDealsFilter = payload;
  }
};
