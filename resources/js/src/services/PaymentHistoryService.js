import axios from '../http/axios'

function generateParams (filterSortPage, filter) {
  const serverQueryObj = {}
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
    if (filter.business_name !== '') {
      serverQueryObj.business_name = filter.business_name
    }

    if (filter.load_counter !== '') {
      serverQueryObj.load_counter = filter.load_counter
    }

    if (filter.from_date !== '') {
      serverQueryObj.from_date = filter.from_date
    }

    if (filter.to_date !== '') {
      serverQueryObj.to_date = filter.to_date
    }

    if (filter.amount !== '') {
      serverQueryObj.amount = filter.amount
    }
  }

  return serverQueryObj
}

export default {
  async getPaymentHistoryDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    return await axios.get('/super-admin/payment-history/datatable', {
      params: serverQueryObj
    })
  }
}
