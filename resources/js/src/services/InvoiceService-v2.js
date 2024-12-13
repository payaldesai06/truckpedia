import axios from "../http/axios";
import axios2 from "axios";

axios2.defaults.baseURL = "/api";

export const fetchInvoices = (data) => {
  const { filter, sortBy, page, perPage } = data;
  let payload = {
    filter,
    page,
    perPage,
  }
  if (sortBy){
    payload.sortBy = sortBy
  }
  return axios.post(
    `v2/invoices/get-list`,
    payload
  );
};
export const createInvoices = (payload) => {
  return axios.post("v2/invoices/create", payload);
};
export const editInvoices = (payload) => {
  return axios.patch("v2/invoices/edit", payload);
};

export const getInvoices = (payload) => {
  return axios.get(`v2/invoices/${payload.invoiceId}`);
};

export const getInvoiceCustomFields = () => {
  return axios.get(`v2/invoices/custom-payment-field/get-fields`);
};

export const createNewCustomFieldPayment = (payload) => {
  return axios.post("v2/invoices/custom-payment-field/create", payload);
};

export const markAsPaid = (invoiceId) => {
  return axios.post("v2/invoices/mark-as-paid", { invoiceId: invoiceId });
};

export const confirmRequestPayment = (invoiceId) => {
  return axios.post("v2/invoices/request-payment", { invoiceId: invoiceId });
};

export const fetchInvoiceNumberSuggestion = () => {
  return axios.get("v2/invoices/get-next-invoice-number");
};

export const deleteInvoice = (payload) => {
  return axios.delete("v2/invoices/delete", { data: payload });
};

export const getPaymentDetailsFromPublicUrl = (url) => {
  return axios2.post('v2/invoices/getPaymentDetailsFromPublicUrl', { url });
};
