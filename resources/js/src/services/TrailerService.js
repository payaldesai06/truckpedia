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
    if (filter.trailer_number !== '') {
      serverQueryObj.trailer_number = filter.trailer_number
    }

    if (filter.trailer_type !== '') {
      serverQueryObj.trailer_type = filter.trailer_type
    }
  }

  return serverQueryObj
}


export default {
  async getTrailerDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('trailers/datatable', {
      params: serverQueryObj
    })
    return response.data.payload
  },

  async getAllTrailers () {
    return await axios.get('/trailers')
  },

  async createTrailer (trailer) {
    return await axios.post('/trailers', trailer)
  },

  async updateTrailer (trailer) {
    return await axios.patch(`trailers/${trailer.id}`, trailer)
  },

  async deleteTrailer (trailerId) {
    return await axios.delete(`trailers/${trailerId}`)
  },

  async changeStatus ({id, payload}) {
    return await axios.patch(`trailers/${id}/change-status`, payload)
  }
}
