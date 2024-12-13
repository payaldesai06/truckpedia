import TafsService from '../../services/TafsService';

export default {
  async getAccounts() {
    const response = await TafsService.getAccounts();
    return response;
  },
  async createAccount(_, payload) {
    const response = await TafsService.createAccount(payload);
    return response;
  },

  async updateAccount(_, payload) {
    const response = await TafsService.updateAccount(payload);
    return response;
  },

  async deleteAccount(_, payload) {
    const response = await TafsService.deleteAccount(payload);
    return response;
  },
};
