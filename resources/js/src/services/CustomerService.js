import axios from '../http/axios';
import qs from 'querystring';
import axiosNode from '../http/axiosNode';

function generateParams(filterSortPage, filter) {
  const serverQueryObj = {};
  if (filterSortPage !== null) {
    if (filterSortPage.hasOwnProperty('page')) {
      serverQueryObj.page = filterSortPage.page + 1;
    }

    if (filterSortPage.hasOwnProperty('rows')) {
      serverQueryObj.rows = filterSortPage.rows;
    }

    if (filterSortPage.sortField !== null) {
      serverQueryObj.sortField = filterSortPage.sortField;
      serverQueryObj.sortOrder =
        filterSortPage.sortOrder === 1 ? 'asc' : 'desc';
    }
  }

  if (filter) {
    if (filter.company_name !== '') {
      serverQueryObj.company_name = filter.company_name;
    }

    if (filter.primary_contact !== '') {
      serverQueryObj.primary_contact = filter.primary_contact;
    }

    if (filter.phone_number !== '') {
      serverQueryObj.phone_number = filter.phone_number;
    }

    if (filter.email !== '') {
      serverQueryObj.email = filter.email;
    }

    if (filter.billing_contact !== '') {
      serverQueryObj.billing_contact = filter.billing_contact;
    }

    if (filter.billing_email !== '') {
      serverQueryObj.billing_email = filter.billing_email;
    }

    if (filter.payment_terms_day !== '') {
      serverQueryObj.payment_terms_day = filter.payment_terms_day;
    }

    if (filter.mcNumber !== '') {
      serverQueryObj.mcNumber = filter.mcNumber;
    }

    if (filter.carrierOnly) {
      serverQueryObj.carrierOnly = 1;
    }

    if (filter.toDownload) {
      serverQueryObj.toDownload = filter.toDownload;
    }
  }

  return serverQueryObj;
}

export default {
  async getCustomerDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter);
    // let serverQueryString = qs.stringify();
    const response = await axios.get('customers/datatable', {
      params: serverQueryObj,
    });
    return response.data.payload;
  },
  async getAllCustomers() {
    return await axios.get('/customers');
  },

  async createCustomer(customer) {
    return await axios.post('/customers', customer);
  },

  async updateCustomer(customer) {
    return await axios.patch(`customers/${customer.id}`, customer);
  },

  async deleteCustomer(customerId) {
    return await axios.delete(`customers/${customerId}`);
  },

  async fetchCustomer(customerId) {
    return await axios.get(`/customers/get/${customerId}`);
  },

  // Node.js API
  async list(payload) {
    const { page, pageSize, fieldsToQuery, filters, sortBy, ...rest } = payload;
    const apiPayload = {
      ...rest,
    };

    if (page) {
      apiPayload.page = page;
    }
    if (pageSize) {
      apiPayload.pageSize = pageSize;
    }
    if (fieldsToQuery && fieldsToQuery.length) {
      apiPayload.fieldsToQuery = fieldsToQuery;
    }
    if (filters && Object.keys(filters).length) {
      apiPayload.filters = filters;
    }
    if (sortBy && Object.keys(sortBy).length) {
      apiPayload.sortBy = sortBy;
    }
    return await axiosNode.post('/customer/list', apiPayload);
  },

  async getCustomerLanes({ customerId, ...rest }) {
    return await axiosNode.get(`customers/${customerId}/lanes`, {
      params: {...rest},
    });
  },

  async addCustomerLane({ customerId, ...rest }) {
    return await axiosNode.post(`customers/${customerId}/lanes`, rest);
  },

  async updateCustomerLane({ customerId, laneId, ...rest }) {
    return await axiosNode.patch(`customers/${customerId}/lanes/${laneId}`, rest);
  },

  async getCustomerLaneById({ customerId, laneId }) {
    return await axiosNode.get(`customers/${customerId}/lanes/${laneId}`);
  },

  async deleteCustomerLane({ customerId, laneId }) {
    return await axiosNode.delete(`customers/${customerId}/lanes/${laneId}`);
  },
};
