import {
  getQuote,
  createQuote,
  updateQuote,
  respondRequests,
  viewRequestsViaLink,
  getShipperQuotesList,
  getCarrierQuotesList,
  handleCarrierResponse,
  getAllCarriers,
} from '@/services/QuoteService';

export default {
  async getQuote(_, payload) {
    const response = await getQuote(payload);
    return response;
  },
  async createQuote(_, payload) {
    const response = await createQuote(payload);
    return response;
  },
  async updateQuote(_, payload) {
    const response = await updateQuote(payload);
    return response;
  },
  async respondRequests(_, payload) {
    return await respondRequests(payload).then(({ data }) => data);
  },
  async viewRequestsViaLink(_, payload) {
    const response = await viewRequestsViaLink(payload);
    return response;
  },
  async getShipperQuotesList(_, payload) {
    const response = await getShipperQuotesList(payload);
    return response;
  },
  async getCarrierQuotesList(_, payload) {
    const response = await getCarrierQuotesList(payload);
    return response;
  },
  async handleCarrierResponse(_, payload) {
    const response = await handleCarrierResponse(payload);
    return response;
  },
  async getAllCarriers(_, payload) {
    const response = await getAllCarriers(payload);
    return response.data.payload;
  },
};
