import {
  fetchInvoices,
  createInvoices,
  editInvoices,
  getInvoices,
  getInvoiceCustomFields,
  createNewCustomFieldPayment,
  markAsPaid,
  confirmRequestPayment,
  fetchInvoiceNumberSuggestion,
  deleteInvoice,
  getPaymentDetailsFromPublicUrl
} from '../../services/InvoiceService-v2';

export default {
  async fetchInvoices(_, eventForServer) {
    const result = await fetchInvoices(eventForServer);
    return result;
  },
  async createInvoices(_, payload) {
    const result = await createInvoices(payload);
    return result;
  },
  async editInvoices(_, payload) {
    const result = await editInvoices(payload);
    return result;
  },
  async getInvoices(_, payload) {
    const result = await getInvoices(payload);
    return result;
  },
  async getInvoiceCustomFields() {
    const result = await getInvoiceCustomFields();
    return result;
  },
  async createNewCustomFieldPayment(_, payload) {
    const result = await createNewCustomFieldPayment(payload);
    return result;
  },
  async markAsPaid(_, invoiceId) {
    const result = await markAsPaid(invoiceId);
    return result;
  },
  async confirmRequestPayment(_, invoiceId) {
    const result = await confirmRequestPayment(invoiceId);
    return result;
  },
  async fetchInvoiceNumberSuggestion() {
    const result = await fetchInvoiceNumberSuggestion();
    return result;
  },
  async deleteInvoice(_, payload) {
    const result = await deleteInvoice(payload);
    return result;
  },
  async getPaymentDetailsFromPublicUrl(_, url) {
    const result = await getPaymentDetailsFromPublicUrl(url);
    return result;
  },
};
