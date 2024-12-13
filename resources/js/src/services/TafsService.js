import axiosNode from '../http/axiosNode';

export default {
  async getAccounts() {
    return await axiosNode.get(`/tafs/accounts`);
  },
  async createAccount(payload) {
    return await axiosNode.post(`/tafs/accounts`, payload);
  },
  async updateAccount({ id, password }) {
    return await axiosNode.patch(`/tafs/accounts/${id}`, { password });
  },
  async deleteAccount(id) {
    return await axiosNode.delete(`/tafs/accounts/${id}`);
  },
};
