import axiosNode from '../http/axiosNode';

export default {
  async getFlatFile(params) {
    return await axiosNode.get(`/trips2/flatFile`, { params });
  },
  async getSettlementSummary(params) {
    return await axiosNode.get(`/trips2/settlementSummary`, { params });
  },
};
