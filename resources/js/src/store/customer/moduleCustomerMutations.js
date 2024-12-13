export default {
  SET_CUSTOMERS_DATATABLE (state, customers) {
    state.customers = customers
  },

  CREATE_CUSTOMER (state, customer) {
    state.customers.data.unshift(customer)
  },

  UPDATE_CUSTOMER (state, customer) {
    state.customers.data =  state.customers.data.map((c) => {
      return (c.customer_id == customer.customer_id) ? (c = customer) : c
    })
  },

  DELETE_CUSTOMER(state, customerId) {
    state.customers.data = state.customers.data.filter(
      (t) => t.customer_id != customerId
    );
  },

  SET_ALL_CUSTOMERS(state, customers) {
    state.allCustomers = customers;
  },

  setCahedCustomers(state, { params, customers }) {
    state.cachedCustomers = {
      ...state.cachedCustomers,
      [JSON.stringify(params)]: customers,
    };
  },

  setCustomerLanes(state, { params, lanesData }) {
    state.customerLanes = {
      ...state.customerLanes,
      [JSON.stringify(params)]: lanesData,
    };
  },

  resetCachedCustomers(state) {
    state.cachedCustomers = {};
  },
  resetCachedCustomerLanes(state) {
    state.customerLanes = {};
  },
};
