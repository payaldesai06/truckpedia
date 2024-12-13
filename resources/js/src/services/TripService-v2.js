import axios from '../http/axios';

export const fetchTrips = (page, pageSize, filters, sortBy) => {
  return axios.post(`v2/trips/get-trips?page=${page}`, {
    pageSize,
    filters,
    sortBy,
  });
};

export const deleteTrip = (id) => {
  return axios.delete(`v2/trips/${id}`);
};

export const fetchTripById = (id) => {
  return axios.get(`v2/trips/${id}`);
};

export const approveTrip = (payload) => {
  return axios.patch('v2/trips/approve-trip', payload);
};

export const customPaymentFieldCreate = (payload) => {
  return axios.post('v2/trips/custom-payment-field/create', payload);
};

export const customPaymentGetField = () => {
  return axios.get('v2/trips/custom-payment-field/get-fields');
};

export const getUploadUrl = (payload) => {
  return axios.post('v2/trips/files/get-upload-urls', payload);
};

export const uploadFiles = (payload) => {
  return axios.post('v2/trips/files/create', payload);
};

export const deleteFile = (payload) => {
  return axios.delete('v2/trips/files', { data: payload });
};

export const getLoadsForPlanning = (tripDateRange) => {
  return axios.post(`v2/trips/get-loads-for-planning`, tripDateRange);
};

export const createTrip = (payload) => {
  return axios.post(`v2/trips/create-trip`, payload);
};

export const getDriverPay = (payload) => {
  return axios.post('v2/trips/load/getDriverPay', payload);
};

export const updatePreTripDriverPay = (payload) => {
  return axios.patch('v2/trips/load/updatePreTripDriverPay', payload);
};

export const changeStatus = (payload) => {
  return axios.patch('v2/trips/changeStatus', payload);
};
