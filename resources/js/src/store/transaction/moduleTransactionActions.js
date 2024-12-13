import transactionService from '@/services/TransactionService'

export default {
  getTransactionDatatable ({commit}, {eventForServer, filter}) {
    return transactionService.getTransactionDatatable(eventForServer, filter)
      .then(data => {
        commit('SET_TRANSACTIONS', data)
        return data
      })
  }
}
