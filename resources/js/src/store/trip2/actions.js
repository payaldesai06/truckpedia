import Trip2Service from '../../services/Trip2Service';

export default {
  async getFlatFile(_, payload) {
    const result = await Trip2Service.getFlatFile(payload);
    return result;
  },

  async getSettlementSummary(_, payload) {
    const result = await Trip2Service.getSettlementSummary(payload);
    return result;
  },
};
