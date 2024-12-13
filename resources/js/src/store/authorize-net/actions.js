import axios from './axios';

export default {
  getClientKeyByInvoice(_, params) {
    return axios.get('authorize-net/getClientKeyByInvoice', {
      params,
    });
  },
  processPayment(_, payload) {
    return axios.post('authorize-net/process-payment', payload);
  },
  // The code is very messy. Why there is no service file???
};
