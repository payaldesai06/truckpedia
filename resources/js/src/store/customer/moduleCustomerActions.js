import axios from '../../http/axios';
import qs from 'querystring';
import customerService from '@/services/CustomerService';

export default {
  getCustomerDatatable({ commit }, { eventForServer, filter }) {
    return customerService
      .getCustomerDatatable(eventForServer, filter)
      .then((data) => {
        if (!(filter || {}).toDownload) {
          commit('SET_CUSTOMERS_DATATABLE', data);
        }
        return data;
      });
  },
  getCarrierDatatable({ commit }, { eventForServer, filter }) {
    return customerService
      .getCustomerDatatable(eventForServer, filter)
      .then((data) => {
        return data;
      });
  },

  getAllCustomers({ commit }, payload) {
    return customerService.getAllCustomers(payload).then(({ data }) => {
      // commit('SET_CUSTOMERS', data.payload)
      return data;
    });
  },

  createCustomer({ commit }, payload) {
    return customerService.createCustomer(payload).then(({ data }) => {
      // commit('CREATE_CUSTOMER', data.payload)
      return data;
    });
  },

  updateCustomer({ commit }, payload) {
    return customerService.updateCustomer(payload).then(({ data }) => {
      // commit('UPDATE_CUSTOMER', data.payload)
      return data;
    });
  },

  deleteCustomer({ commit }, customerId) {
    return customerService.deleteCustomer(customerId).then(({ data }) => {
      commit('DELETE_CUSTOMER', customerId);
      return data;
    });
  },

  fetchCustomer(_, customerId) {
    return customerService.fetchCustomer(customerId).then(({ data }) => {
      return data;
    });
  },

  // Node.js API
  list({ commit }, payload = {}) {
    return customerService.list(payload).then(({ data }) => {
      commit('SET_ALL_CUSTOMERS', data.payload.customers);
      return data;
    });
  },

  setCachedCustomers({ commit }, params) {
    return customerService.list(params).then(({ data }) => {
      commit('setCahedCustomers', {
        params,
        customers: data.payload.customers,
      });
    });
  },

  async getCustomerLanes(_, params) {
    const response = await customerService.getCustomerLanes(params);
    return response;
  },

  async addCustomerLane(_, payload) {
    const response = await customerService.addCustomerLane(payload);
    return response;
  },

  async updateCustomerLane(_, payload) {
    const response = await customerService.updateCustomerLane(payload);
    return response;
  },

  async getCustomerLaneById(_, payload) {
    const response = await customerService.getCustomerLaneById(payload);
    return response;
  },

  async deleteCustomerLane(_, payload) {
    const response = await customerService.deleteCustomerLane(payload);
    return response;
  },
};
