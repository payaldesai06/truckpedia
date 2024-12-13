import accountingService from '@/services/AccountingService';

export default {
  async getAccounts({ commit }, payload) {
    const response = await accountingService.getAccounts(payload);
    return response;
  },

  async createAccount({ commit }, payload) {
    const response = await accountingService.createAccount(payload);
    return response;
  },

  async updateAccount({ commit }, payload) {
    const response = await accountingService.updateAccount(payload);
    return response;
  },

  async pullAccountsFromQbo({ commit }) {
    const response = await accountingService.pullAccountsFromQbo();
    return response;
  },

  async pushAccountsToQbo({ commit }) {
    const response = await accountingService.pushAccountsToQbo();
    return response;
  },

  async getExpenses({ commit }, payload) {
    const response = await accountingService.getExpenses(payload);
    return response;
  },

  async pullItemsFromQbo({ commit }) {
    const response = await accountingService.pullItemsFromQbo();
    return response;
  },

  async createExpense({ commit }, payload) {
    const response = await accountingService.createExpense(payload);
    return response;
  },

  async updateExpense({ commit }, payload) {
    const response = await accountingService.updateExpense(payload);
    return response;
  },

  async getFuelExpenses({ commit }, payload) {
    const response = await accountingService.getFuelExpenses(payload);
    return response;
  },

  // Fuel Card Actions
  async getFuelCards({ commit }, payload) {
    const response = await accountingService.getFuelCards(payload);
    return response;
  },

  async createFuelCard({ commit }, payload) {
    const response = await accountingService.createFuelCard(payload);
    return response;
  },

  async updateFuelCard({ commit }, payload) {
    const response = await accountingService.updateFuelCard(payload);
    return response;
  },

  async getFuelCardById({ commit }, id) {
    const response = await accountingService.getFuelCardById(id);
    return response;
  },

  async deleteFuelCard({ commit }, id) {
    const response = await accountingService.deleteFuelCard(id);
    return response;
  },

  async getAccesorialServices({ commit }, params) {
    const response = await accountingService.getAccesorialServices(params);
    return response;
  },

  async getAccesorialServicesById({ commit }, id) {
    const response = await accountingService.getAccesorialServicesById(id);
    return response;
  },

  async createAccessorialServices({ commit }, payload) {
    const response = await accountingService.createAccessorialServices(payload);
    return response;
  },

  async updateAccessorialServices({ commit }, payload) {
    const response = await accountingService.updateAccessorialServices(payload);
    return response;
  },

  async deleteAccessorialServices({ commit }, id) {
    const response = await accountingService.deleteAccessorialServices(id);
    return response;
  },

  async getAllAccessorialFees(_, params = {}) {
    const response = await accountingService.getAllAccessorialFees(params);
    return response;
  },

  async createAccessorialFee(_, payload) {
    const response = await accountingService.createAccessorialFee(payload);
    return response;
  },

  async updateAccessorialFee(_, payload) {
    const response = await accountingService.updateAccessorialFee(payload);
    return response;
  },

  async getAllAccessorialDeductions(_, params = {}) {
    const response = await accountingService.getAllAccessorialDeductions(
      params
    );
    return response;
  },

  async createAccessorialDeduction(_, payload) {
    const response = await accountingService.createAccessorialDeduction(
      payload
    );
    return response;
  },

  async updateAccessorialDeduction(_, payload) {
    const response = await accountingService.updateAccessorialDeduction(
      payload
    );
    return response;
  },
};
