import axios from '../http/axios'
import axiosNode from '../http/axiosNode'

function generateParams(filterSortPage, filter) {
  const serverQueryObj = {};
  if (filterSortPage !== null) {
    if (filterSortPage.hasOwnProperty('page')) {
      serverQueryObj.page = filterSortPage.page + 1
    }

    if (filterSortPage.hasOwnProperty('rows')) {
      serverQueryObj.rows = filterSortPage.rows
    }

    if (filterSortPage.sortField !== null) {
      serverQueryObj.sortField = filterSortPage.sortField
      serverQueryObj.sortOrder = filterSortPage.sortOrder === 1 ? 'asc' : 'desc'
    }
  }

  if (filter) {
    if (filter.toDownload !== '') {
      serverQueryObj.to_download = filter.toDownload
    }

    if (filter.startDate !== '') {
      serverQueryObj.startDate = filter.startDate
    }

    if (filter.endDate !== '') {
      serverQueryObj.endDate = filter.endDate
    }

    if (filter.isBasicReport !== undefined) {
      serverQueryObj.isBasicReport = filter.isBasicReport
    }

    /**
     * Driver Payment Report
     */
    if (filter.driverId) {
      serverQueryObj.driverId = filter.driverId
    }

    // Revenue By Dispatcher Commission Report
    if (filter.dispatcherIds) {
      serverQueryObj.dispatcherIds = filter.dispatcherIds
    }

    /**
     * Equipment Maintenance Report
     */
    if (filter.chooseUnit) {
      serverQueryObj.chooseUnit = filter.chooseUnit
    }

    /**
     * Filter support for commission status 
     */
    if (filter.internalFilters) {
      serverQueryObj.filters = { ...filter.internalFilters }
    }
  }

  return serverQueryObj
}


export default {
  async getRevenueByCustomerReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    const response = await axios.get(
        '/reports/customer-revenue/datatable', {params: serverQueryObj})

    return response.data.payload
  },

  async getRevenueByDispatcherSalesReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    const response = await axios.post(
        '/reports/dispatcher-sales-revenue/datatable', serverQueryObj);
    return response.data.payload
  },

  async getRevenueByDispatcherCommissionReportDatatable(
      filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    const response = await axios.post(
        '/reports/dispatcher-commission/datatable', serverQueryObj)
    return response.data.payload
  },

  async editRevenueByDispatcherCommissionReport(data) {
    const payload = {
      dispatcher_paid: data.dispatcher_paid,
      other_commission_amount: data.other_commission,
      override_commission_fractional: data.override_commission,
      shared_dispatcher_commission_fractional: data.shared_dispatcher_commission
    };
    const response =
        await axios.put(`/loads/${data.id}/update-commission-details`, payload)
    return response.data
  },

  async getDriverPaymentReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    const response = await axios.get(
        '/reports/driver-payment/datatable', {params: serverQueryObj})
    return response.data.payload
  },

  async getLoadDriverReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    const response = await axios.get(
        '/reports/load-driver-report/datatable', {params: serverQueryObj})
    return response.data.payload
  },

  async getTripRevenueReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)

    const response = await axios.get(
        '/reports/trip-revenue/datatable', {params: serverQueryObj})

    return response.data.payload
  },

  async getEquipmentMaintenanceReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)

    const response = await axios.get(
        '/reports/equipment-maintenance/datatable', {params: serverQueryObj})

    return response.data.payload
  },

  async getEquipmentListReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)

    const response = await axios.get(
        '/reports/equipment-list/datatable', {params: serverQueryObj})

    return response.data.payload
  },

  async getDropTrailerReportDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)

    const response = await axios.get(
        '/reports/drop-trailers/datatable', {params: serverQueryObj})

    return response.data.payload;
  },

  async getReportIfta(payload) {
    const response = await axios.post("v2/ifta/getReport", payload);
    return response.data.payload;
  },

  async importFuelSurcharge(payload) {
    const response = await axiosNode.post(
      '/loads/import/fuelSurcharge',
      payload
    );
    return response.data.payload;
  },
  
  async exportLoadsMasReport(payload) {
    const response = await axiosNode.get('/loads/export/mas', {
      params: payload,
    });
    return response.data.payload;
  },

  async exportLoadsSyncadaReport(payload) {
    const response = await axiosNode.get('/loads/export/syncada', {
      params: payload,
    });
    return response.data.payload;
  },

  async exportAccessorialServiceMasReport(payload) {
    const response = await axiosNode.get(
      '/accounting/accessorialServices/export/mas',
      { params: payload }
    );
    return response.data.payload;
  },

  async exportAccessorialServiceSyncadaReport(payload) {
    const response = await axiosNode.get(
      'accounting/accessorialServices/export/syncada',
      { params: payload }
    );
    return response.data.payload;
  },
};