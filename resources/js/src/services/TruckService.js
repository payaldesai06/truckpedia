import axios from '../http/axios'
import qs from 'querystring'

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
    if (filter.truck_number !== '') {
      serverQueryObj.truck_number = filter.truck_number
    }

    if (filter.truck_type !== '') {
      serverQueryObj.truck_type = filter.truck_type
    }
  }

  return serverQueryObj
}


export default {
  async getTruckDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('trucks/datatable', {
      params: serverQueryObj
    })
    return response.data.payload
  },

  async getAllTrucks () {
    return await axios.get('/trucks')
  },

  async create (truck) {
    return await axios.post('/trucks', truck)
  },

  async update (truck) {
    return await axios.patch(`trucks/${truck.id}`, truck)
  },

  async delete (truckId) {
    return await axios.delete(`trucks/${truckId}`)
  },

  async changeStatus ({id, payload}) {
    return await axios.patch(`trucks/${id}/change-status`, payload)
  }
}
