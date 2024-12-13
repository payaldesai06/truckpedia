import axios from '../http/axiosNode/index';
import axiosNode from '../http/axiosNode/index';

export default {
  async getAccounts(payload) {
    return await axios.get(`/accounting/accounts`, payload);
  },

  async createAccount(payload) {
    return await axios.post(`/accounting/accounts`, payload);
  },

  async getAccountById(id) {
    return await axios.get(`/accounting/accounts/${id}`);
  },

  async updateAccount({ id, payload }) {
    return await axios.patch(`/accounting/accounts/${id}`, payload);
  },

  async getExpenses(payload) {
    return await axios.get(`/accounting/expenses`, payload);
  },

  async createExpense(payload) {
    return await axios.post(`/accounting/expenses`, payload);
  },

  async updateExpense({ id, payload }) {
    return await axios.patch(`/accounting/expenses/${id}`, payload);
  },

  async getFuelExpenses(payload) {
    return await axios.get(`/accounting/fuelExpenses`, {
      params: payload,
    });
  },

  // Fuel Card Services
  async getFuelCards(payload) {
    return await axios.get(`accounting/fuelCards`, {
      params: payload,
    });
  },
  async createFuelCard(payload) {
    return await axios.post(`/accounting/fuelCards`, payload);
  },
  async updateFuelCard({ id, ...rest }) {
    return await axios.patch(`/accounting/fuelCards/${id}`, rest);
  },
  async getFuelCardById(id) {
    return await axios.get(`/accounting/fuelCards/${id}`);
  },
  async deleteFuelCard(id) {
    return await axios.delete(`accounting/fuelCards/${id}`);
  },
  async getAccesorialServices(params) {
    return await axios.get(`accounting/accessorialServices`, {
      params,
    });
  },
  async getAccesorialServicesById(id) {
    return await axios.get(`accounting/accessorialServices/${id}`);
  },
  async createAccessorialServices(payload) {
    return await axios.post(`accounting/accessorialServices`, payload);
  },
  async updateAccessorialServices({ id, ...rest }) {
    return await axios.patch(`accounting/accessorialServices/${id}`, rest);
  },
  async deleteAccessorialServices(id) {
    return await axios.delete(`accounting/accessorialServices/${id}`);
  },
  async getAllAccessorialFees(params) {
    return await axiosNode.get('accounting/accessorialFees', { params });
  },
  async createAccessorialFee(payload) {
    return await axiosNode.post('accounting/accessorialFees', payload);
  },
  async updateAccessorialFee({ id, ...rest }) {
    return await axiosNode.patch(`accounting/accessorialFees/${id}`, rest);
  },
  async getAllAccessorialDeductions(params) {
    return await axiosNode.get('accounting/accessorialDeductions', { params });
  },
  async createAccessorialDeduction(payload) {
    return await axiosNode.post('accounting/accessorialDeductions', payload);
  },
  async updateAccessorialDeduction({ id, ...rest }) {
    return await axiosNode.patch(
      `accounting/accessorialDeductions/${id}`,
      rest
    );
  },
};
