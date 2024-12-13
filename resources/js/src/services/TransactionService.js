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
    // Searching
  }

  return serverQueryObj
}

export default {
  async getTransactionDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('/transactions/datatable', {
      params: serverQueryObj
    })

    return response.data.payload
  }
}
