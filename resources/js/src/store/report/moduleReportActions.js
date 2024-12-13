import reportService from '@/services/ReportService'

export default {
  getRevenueByCustomerReportDatatable({commit}, {eventForServer, filter}) {
    return reportService.getRevenueByCustomerReportDatatable(eventForServer, filter)
      .then(data => {
        commit('SET_CUSTOMER_REVENUE_REPORTS', data)
        return data
      })
  },

  getRevenueByDispatcherSalesReportDatatable(
      {commit}, {eventForServer, filter}) {
    return reportService.getRevenueByDispatcherSalesReportDatatable(eventForServer, filter)
      .then(data => {
        commit('SET_DISPATCHER_SALES_REVENUE_REPORTS', data)
        return data
      })
  },

  getRevenueByDispatcherCommissionReportDatatable(
      {commit}, {eventForServer, filter}) {
    return reportService.getRevenueByDispatcherCommissionReportDatatable(eventForServer, filter)
      .then(data => {
        commit('SET_DISPATCHER_COMMISSION_REVENUE_REPORTS', data)
        return data
      })
  },

  editRevenueByDispatcherCommissionReport({commit}, payload) {
    return reportService.editRevenueByDispatcherCommissionReport(payload).then(
        data => {// commit('EDIT_DISPATCHER_COMMISSION_REVENUE_REPORTS', data)
                 return data})
  },

  getDriverPaymentReportDatatable({commit}, {eventForServer, filter}) {
    return reportService.getDriverPaymentReportDatatable(eventForServer, filter)
        .then(data => data)
  },

  getLoadDriverReportDatatable({commit}, {eventForServer, filter}) {
    return reportService.getLoadDriverReportDatatable(eventForServer, filter)
        .then(data => data)
  },

  getTripRevenueReportDatatable({commit}, {eventForServer, filter}) {
    return reportService.getTripRevenueReportDatatable(eventForServer, filter)
        .then(data => data)
  },

  getEquipmentMaintenanceReportDatatable({commit}, {eventForServer, filter}) {
    return reportService
        .getEquipmentMaintenanceReportDatatable(eventForServer, filter)
        .then(data => data)
  },

  getEquipmentListReportDatatable({commit}, {eventForServer, filter}) {
    return reportService.getEquipmentListReportDatatable(eventForServer, filter)
        .then(data => data)
  },

  getDropTrailerReportDatatable({commit}, {eventForServer, filter}) {
    return reportService.getDropTrailerReportDatatable(eventForServer, filter)
        .then(data => data)
  },

  async getReportIfta({ commit }, payload) {
    return await reportService.getReportIfta(payload);
  },

  async importFuelSurcharge(_, payload) {
    return await reportService.importFuelSurcharge(payload);
  },

  async exportLoadsMasReport(_, payload) {
    return await reportService.exportLoadsMasReport(payload);
  },

  async exportLoadsSyncadaReport(_, payload) {
    return await reportService.exportLoadsSyncadaReport(payload);
  },

  async exportAccessorialServiceMasReport(_, payload) {
    return await reportService.exportAccessorialServiceMasReport(payload);
  },

  async exportAccessorialServiceSyncadaReport(_, payload) {
    return await reportService.exportAccessorialServiceSyncadaReport(payload);
  },
}
