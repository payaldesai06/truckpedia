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
    if (filter.load_unique_id !== '') {
      serverQueryObj.load_unique_id = filter.load_unique_id
    }

    if (filter.status !== '') {
      serverQueryObj.status = filter.status
    }

    if (filter.customer_company_name !== '') {
      serverQueryObj.customer_company_name = filter.customer_company_name
    }

    if (filter.customer_billing_email !== '') {
      serverQueryObj.customer_billing_email = filter.customer_billing_email
    }

    if (filter.total_amount !== '') {
      serverQueryObj.total_amount = filter.total_amount
    }

    if (filter.invoice_generated_at !== '') {
      serverQueryObj.invoice_generated_at = filter.invoice_generated_at
    }

    if (filter.invoice_due_date_at !== '') {
      serverQueryObj.invoice_due_date_at = filter.invoice_due_date_at
    }

    if (filter.startDate !== '') {
      serverQueryObj.startDate = filter.startDate
    }

    if (filter.endDate !== '') {
      serverQueryObj.endDate = filter.endDate
    }

    /**
     * Revenue
     */
    if (filter.year !== '') {
      serverQueryObj.year = filter.year
    }
  }

  return serverQueryObj
}


export default {
  async getTripStats (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)

    return await axios.get('/dashboard/trips/stats', {
      params: serverQueryObj
    })
  },

  async getTripRevenue (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)

    return await axios.get('/dashboard/trips/revenue', {
      params: serverQueryObj
    })
  },

  async getLoadDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('/dashboard/loads/datatable', {
      params: serverQueryObj
    })
    return response.data.payload
  }
}
