import paymentHistoryService from '@/services/PaymentHistoryService'

export default {
  getPaymentHistoryDatatable ({commit}, {
    eventForServer,
    filter
  }) {
    return paymentHistoryService.getPaymentHistoryDatatable(eventForServer, filter)
      .then(({data}) => {
        commit('SET_PAYMENT_HISTORIES', data.payload)
        return data
      })
  }
}
