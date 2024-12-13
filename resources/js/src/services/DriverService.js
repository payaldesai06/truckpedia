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
    if (filter.name !== '') {
      serverQueryObj.name = filter.name
    }

    if (filter.type !== '') {
      serverQueryObj.type = filter.type
    }

    if (filter.username !== '') {
      serverQueryObj.username = filter.username
    }

    if (filter.phone_number !== '') {
      serverQueryObj.phone_number = filter.phone_number
    }
  }

  return serverQueryObj
}

export default {
  async getDriverDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('/drivers/datatable', {
      params: serverQueryObj
    })
    return response.data.payload
  },

  async getAllDrivers () {
    return await axios.get('/drivers')
  },

  async createDriver (driver) {
    return await axios.post('/drivers', driver)
  },

  async updateDriver (driver) {
    return await axios.patch(`/drivers/${driver.id}`, driver)
  },

  async deleteDriver (driverId) {
    return await axios.delete(`/drivers/${driverId}`)
  },

  async changeStatus (driver) {
    return await axios.patch(`/drivers/${driver.id}/change-status`, driver)
  },

  async deleteDriverFile (fileId) {
    return await axios.delete(`/driver-files/${fileId}`)
  }
}
