import axiosNode from '../http/axiosNode';

export const getShipperQuotesList = ({ filters, pageSize, page }) => {
  return axiosNode.post('quote/shipper/list', {
    filters,
    pageSize,
    page,
  });
};

export const getCarrierQuotesList = ({ filters, pageSize, page }) => {
  return axiosNode.post('quote/carrier/list', {
    filters,
    pageSize,
    page,
  });
};

export const createQuote = (quote) => {
  return axiosNode.post('quote/shipper/create', quote);
};

export const getQuote = (id) => {
  return axiosNode.get(`quote/shipper/get?id=${id}`);
};

export const updateQuote = (quote) => {
  return axiosNode.patch('quote/shipper/update', quote);
};

export const handleCarrierResponse = (quotes) => {
  return axiosNode.post('quote/shipper/handleCarrierResponse', quotes);
};

export const viewRequestsViaLink = (quotes) => {
  return axiosNode.post('quote/carrier/viewRequestsViaLink', quotes);
};

export const respondRequests = (quotes) => {
  return axiosNode.post('quote/carrier/respondRequests', quotes);
};

export const getAllCarriers = (payload) => {
  return axiosNode.post('fmcsaCarrier/getCarriers', payload);
};
