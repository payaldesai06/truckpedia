import config from '@/config/constants';
import pdfParserAxios from 'axios';
import qs from 'querystring';
import axiosNode from '../http/axiosNode';
import axios from '../http/axios';

function generateParams(filterSortPage, filter) {
  const serverQueryObj = {};

  if (filterSortPage) {
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
    if (filter.toDownload !== '') {
      serverQueryObj.to_download = filter.toDownload;
    }

    if (filter.load_unique_id !== '') {
      serverQueryObj.load_unique_id = filter.load_unique_id;
    }

    if (filter.refrence_id !== '') {
      serverQueryObj.refrence_id = filter.refrence_id;
    }

    if (filter.companyInternalReference !== '') {
      serverQueryObj.companyInternalReference = filter.companyInternalReference;
    }

    if (filter.shipping_date !== '') {
      serverQueryObj.shipping_date = filter.shipping_date;
    }

    if (filter.delivery_date !== '') {
      serverQueryObj.delivery_date = filter.delivery_date;
    }

    if (filter.customer !== '') {
      serverQueryObj.customer = filter.customer;
    }

    if (filter.pick_up !== '') {
      serverQueryObj.pick_up = filter.pick_up;
    }

    if (filter.delivery !== '') {
      serverQueryObj.delivery = filter.delivery;
    }

    if (filter.status !== '') {
      serverQueryObj.status = filter.status;
    }

    if (filter.loadStatusWith !== '') {
      serverQueryObj.loadStatusWith = filter.loadStatusWith;
    }

    if (filter.startDate !== '') {
      serverQueryObj.startDate = filter.startDate;
    }

    if (filter.endDate !== '') {
      serverQueryObj.endDate = filter.endDate;
    }

    if (filter.driver_name) {
      serverQueryObj.driver_name = filter.driver_name;
    }

    if (filter.tag_id !== undefined) {
      serverQueryObj.tag_id = filter.tag_id;
    }

    if (filter.direction) {
      serverQueryObj.direction = filter.direction;
    }

    if (filter.pickupNumber !== '') {
      serverQueryObj.pickupNumber = filter.pickupNumber;
    }

    if (filter.deliveryNumber !== '') {
      serverQueryObj.deliveryNumber = filter.deliveryNumber;
    }
  }

  return serverQueryObj;
}

export default {
  async getLoadDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter);
    // let serverQueryString = qs.stringify();
    return await axios.get('/loads/datatable', { params: serverQueryObj });
  },

  // Get Unique ID for LOAD
  async getLoadUniqueId(tagId = '') {
    return await axios.get(`/loads/unique-id/${tagId}`);
  },

  async getLoad(loadId) {
    return await axios.get(`/loads/${loadId}`);
  },

  async getOneLoad({ loadId, params }) {
    return await axiosNode.get(`/loads/${loadId}`, { params });
  },

  async createLoad(payload) {
    return await axios.post('/loads', payload);
  },

  async updateLoad({ id, payload }) {
    return await axios.patch(`/loads/${id}`, payload);
  },

  async updateLoadDispatcherNotes({ id, payload }) {
    return await axios.patch(`/loads/${id}/update-dispatcher-notes`, payload);
  },

  async deleteLoad({ id }) {
    return await axios.delete(`/loads/${id}`);
  },

  async restoreLoad({ id }) {
    return await axios.post(`/loads/${id}/restore`);
  },

  /**
   * Rate Confirmation S3
   */
  async getRateConfirmationS3(payload) {
    return await axios.post('/rate-confirmations/s3-image', payload);
  },

  /**
   * Rate Confirmation S3
   */
  async getPdfExtractData(payload) {
    const { baseURL, key } = config.pdfParser;

    return await pdfParserAxios.post(baseURL, qs.stringify(payload), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'parser-api-key': key,
      },
    });
  },

  /*
   * Load Invoice
   */
  async generateInvoice({ id, skipFactoring }) {
    return await axios.post(`/loads/${id}/invoices`, { skipFactoring });
  },

  async generateMassInvoice(payload) {
    return await axios.post(`/loads/generate-mass-invoice`, payload);
  },

  /*
   * Request for Payment
   */
  async requestForPayment({ id, subject }) {
    return await axios.post(`/loads/${id}/payments`, { emailSubject: subject });
  },

  async requestMassInvoicePayment(payload) {
    return await axios.post(`/loads/request-mass-invoice-payment`, payload);
  },

  /*
   * Payment Received
   */
  async paymentReceived({ id, paidAmount }) {
    return await axios.patch(`/loads/${id}/payments`, { paidAmount });
  },

  async multipleLoadsPaymentReceived(payload) {
    return await axios.post(`/loads/multiple-loads-payment-received`, payload);
  },

  /*
   * Admin Upload
   *
   * 1) Load Documents
   * 2) Rate Confirmation
   * 3) Invoice
   */
  async adminUploadLoadImage({ id, payload }) {
    return await axios.post(`/admin/loads/${id}/documents`, payload);
  },

  async adminDeleteLoadImage({ loadId, loadImageId }) {
    return await axios.delete(
      `/admin/loads/${loadId}/documents/${loadImageId}`
    );
  },

  async adminUploadRateConfirmation({ id, payload }) {
    return await axios.post(`/admin/loads/${id}/rate-confirmations`, payload);
  },

  async adminDeleteRateConfirmation({ loadId, rateConfirmationId }) {
    return await axios.delete(
      `/admin/loads/${loadId}/rate-confirmations/${rateConfirmationId}`
    );
  },

  async adminUploadThirdPartyCarrierInvoice({ id, payload }) {
    return await axios.post(
      `/admin/loads/${id}/thirdPartyCarrierInvoice`,
      payload
    );
  },

  async adminDeleteThirdPartyCarrierInvoice({ loadId }) {
    return await axios.delete(
      `/admin/loads/${loadId}/thirdPartyCarrierInvoice`
    );
  },

  async adminUploadInvoice({ id, payload }) {
    return await axios.post(`/admin/loads/${id}/invoices`, payload);
  },

  /**
   * Mark Trailer as Picked Up
   */
  async trailerPickedUp({ id }) {
    return await axios.post(`/driver-loads/${id}/trailer-picked-up`);
  },
  async getAllDriverWithAssignedVehicles() {
    return await axios.post(
      `/v2/drivers/get-all-driver-with-assigned-vehicles`
    );
  },

  /* Cancel and Restore canceled load API calls */
  async cancelLoad({ load_id }) {
    return await axios.post(`loads/${load_id}/cancel-load`);
  },

  async restoreCanceledLoad({ load_id }) {
    return await axios.post(`loads/${load_id}/restore-canceled`);
  },

  /* Extract Load Tender Data From Txt API call */
  async extractLoadTenderDataFromTxt(payload) {
    return await axiosNode.post('load/extractLoadTenderDataFromTxt', payload);
  },
  async getAllDriverTruckTrailerForLoadDriver() {
    return await axios.post('v2/drivers/getAllDriverTruckTrailerForLoadDriver');
  },

  /* Merge Load API call */
  async customizedMergeLoad(payload) {
    return await axios.post(`/v2/load/customized/mergeLoad`, payload);
  },
  async getUploadUrlPath(payload) {
    return await axios.post('v2/load/files/get-upload-urls', payload);
  },

  async trackLoadTrucks(payload) {
    return await axios.post('v2/load/trackLoadTrucks', payload);
  },

  async getPublicWeeklyFuelPrices() {
    return await axios.get('v2/publicWeeklyFuelPrices/get');
  },

  async batchDeleteLoads(data) {
    return await axios.delete(`v2/load/batchDelete`, { data });
  },

  async updateSelectFields(payload) {
    return await axios.patch('/v2/load/updateSelectFields', payload);
  },

  async getAgingReport(payload) {
    return await axiosNode.get('/load/accounting/agingReport', payload);
  },

  async nodeGetLoads(params) {
    return await axiosNode.get('/loads', { params });
  },

  async nodeUpdateLoad(id, payload) {
    return await axiosNode.patch('/loads/' + id, payload);
  },

  async loadsBulkUpdate(payload) {
    return await axiosNode.patch('/loads/bulkUpdate', payload);
  },
};
