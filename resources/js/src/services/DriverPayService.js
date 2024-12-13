import axios from '../http/axios'

function generateParams(filterSortPage, filter) {
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
    if (filter.id !== '') {
      serverQueryObj.id = filter.id
    }

    if (filter.trip_start_date !== '') {
      serverQueryObj.trip_start_date = filter.trip_start_date
    }

    if (filter.trip_end_date !== '') {
      serverQueryObj.trip_end_date = filter.trip_end_date
    }

    if (filter.driver_one_name !== '') {
      serverQueryObj.driver_one_name = filter.driver_one_name
    }

    if (filter.driver_two_name !== '') {
      serverQueryObj.driver_two_name = filter.driver_two_name
    }

    if (filter.driver_pay_types !== '') {
      serverQueryObj.driver_pay_types = filter.driver_pay_types
    }

    if (filter.trip_expenses_count !== '') {
      serverQueryObj.trip_expenses_count = filter.trip_expenses_count
    }

    if (filter.status !== '') {
      serverQueryObj.status = filter.status
    }

    if (filter.payment_request_date !== '') {
      serverQueryObj.payment_request_date = filter.payment_request_date
    }

    if (filter.reimbursement !== '') {
      serverQueryObj.reimbursement = filter.reimbursement
    }

    /*if (filter.trip_start_time !== '') {
      serverQueryObj.trip_start_time = filter.trip_start_time
    }

    if (filter.trip_end_time !== '') {
      serverQueryObj.trip_end_time = filter.trip_end_time
    }*/
  }

  return serverQueryObj
}

export default {
  async getDriverPayDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter);
    // let serverQueryString = qs.stringify();
    const response =
        await axios.get('/driver-pays/datatable', {params: serverQueryObj});
    return response.data.payload;
  }
}
